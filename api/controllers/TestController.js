var md5 = require('md5');
module.exports = {
	// Hàm trả về 1 bản ghi trong bảng test, với input: testId
	getTest: async function(req, res){
		var testId= req.body.test_id;
		var dataTest= await EducationTests.findOne({
			'id': testId,
			'software': 1
		});
		res.json(dataTest);

	},
	//Hàm trả về mảng các câu hỏi và câu trả lời( đề trắc nghiệm ) với input testId
	getQuestionsAnswers: async function(req, res){
		var testId= req.body.test_id;		
		testId = '%,'+testId+ ',%';
		var dataQuestions = await EducationQuestions.find({
			where: {
				'testId': { like:  testId},
				'software': 1
			},
			select:['id', 'request', 'name', 'name_vn', 'testId', 'questionType', 'status', 'audio', 'translation', 'hasImage', 'hasAudio', 'medias', 'explaination']
		}).populate('ref_question_answers');
		res.json(dataQuestions);
	},
	//Hàm trả về mảng các câu hỏi và câu trả lời( đề tự luận ) với input testId
	getQuestionsAnswersTl: async function(req, res){
		var testId= req.body.test_id;
		
		testId = '%,'+testId+ ',%';
		var dataQuestions = await EducationQuestions.find({
			where: {
				'testId': { like:  testId},
				'software': 1
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
		var startTime = req.body.startTime;
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
			'startTime': startTime,
			'userId' : userId,
			'duringTime' : duringTime,
			'rank' : rank,
			'quantity_question' : quantity_question,
			'lang' : lang,
			'compability' : compability,
			'parentTest' : parentTest,
			'keybook' : keybook,
			'software': 1
		}).fetch();
		//update bang user_answers
		questions.forEach( async function(question, index) {
			var user_book_id = userbok['id'];
			var questionId = question['questionId'];
			var answerId = question['answerId']; 
			var user_answers = await EducationUserBookAnswers.create({
				'user_book_id': user_book_id,
				'questionId': questionId,
				'answerId': answerId
			});
		});
		// update bang user_book_rating
		await EducationUserBookRatings.findOrCreate(
			{ 
				userId: userId ,
				testId: testId
			}, 
			{ 
				userId: userId ,
				testId: testId,
				startTime: startTime,
				mark: mark,
				duringTime: duringTime,
				username: username,
				name: name,
				name_sn: name_sn,
				software: 1
			}
		).exec(async(err, element, wasCreated)=> {
		  if (err) { return res.serverError(err); }

		  if(wasCreated) {
		    //Created a new row
		  }
		  else { // update row		    
		    if((element['mark']< mark) || ( (element['mark'] == mark) && (element['duringTime'] > duringTime) )){
		    	await EducationUserBookRatings.update({
		    		id: element['id']
		    	}).set({
		    		startTime: startTime,
					mark: mark,
					duringTime: duringTime
		    	});		    		    	
		    }

		  }
		  
		});
		res.json(1);
	},
	// laay xep hang cua de thi
	getRating: async function(req, res){
		var userbookId = req.body.userbookId;
		var testId = req.body.testId;				
		var dataRating = await EducationUserBooks.find({
			where: {				
				testId: testId
			},
			select: ['id'],
			sort: [{mark: 'DESC'}, {duringTime: 'DESC'}]
		});
		var rating =  dataRating.findIndex(element => element['id']===userbookId);
		var quantity = dataRating.length;
		var result = {
				rating: rating,
				total: quantity
			};
		res.json(result);
	},
	
	
};