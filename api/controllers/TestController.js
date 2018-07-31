var md5 = require('md5');
module.exports = {
	// Hàm trả về 1 bản ghi trong bảng test, với input: testId
	getTest: async function(req, res){
		var testId= req.body.test_id;
		var dataTest= await EducationTests.findOne({'id': testId});
		res.json(dataTest);

	},
	//Hàm trả về mảng các câu hỏi và câu trả lời( đề trắc nghiệm ) với input testId
	getQuestionsAnswers: async function(req, res){
		var testId= req.body.test_id;		
		testId = '%,'+testId+ ',%';
		var dataQuestions = await EducationQuestions.find({
			where: {
				'testId': { like:  testId}
			},
			select:['id', 'request', 'name', 'name_vn', 'testId', 'questionType', 'status', 'audio', 'translation', 'hasImage', 'hasAudio', 'medias']
		}).populate('ref_question_answers');
		res.json(dataQuestions);
	},
	//Hàm trả về mảng các câu hỏi và câu trả lời( đề tự luận ) với input testId
	getQuestionsAnswersTl: async function(req, res){
		var testId= req.body.test_id;
		
		testId = '%,'+testId+ ',%';
		var dataQuestions = await EducationQuestions.find({
			where: {
				'testId': { like:  testId}
			}
		});
		res.json(dataQuestions);
	},
	// Hàm update kết quả bài thi
	updateUserBooks : async function(req, res){
		var questions = req.body.questions;
		var categoryId = req.body.categoryId;
		var testId = req.body.testId;
		var mark = req.body.mark;
		var userId = req.body.userId;
		var duringTime = req.body.duringTime;
		var rank = req.body.rank;
		var quantity_question = req.body.quantity_question;
		var lang = req.body.lang;
		var compability = req.body.compability;
		var parentTest = req.body.parentTest;		
		var keybook = testId + userId + duringTime;
		var md5 = require('md5');
		keybook =md5(keybook);
		var S = require('string');
		keybook = S(keybook).left(7).toString();
		//update bang user_book
		var userbok= await EducationUserBooks.create({
			'testId' : testId,
			'categoryId': categoryId,
			'mark' : mark,
			'userId' : userId,
			'duringTime' : duringTime,
			'rank' : rank,
			'quantity_question' : quantity_question,
			'lang' : lang,
			'compability' : compability,
			'parentTest' : parentTest,
			'keybook' : keybook,
		}).fetch();
		//update bang user_answers
		questions.forEach( async function(question, index) {
			var user_book_id = userbok['id'];
			var questionId = question['questionId'];
			var answerId = question['answerId']; 
			var userbok= await EducationUserBookAnswer.create({
				'user_book_id': user_book_id,
				'questionId': questionId,
				'answerId': answerId
			});
		});
		res.json(1);
	}
	
};