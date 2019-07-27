var md5 = require('md5');
module.exports = {
	// Hàm trả về 1 bản ghi trong bảng test, với input: testId
	getTest: async function(req, res){
		var testId= req.body.test_id;
		var software = req.body.software || 1;
    	var site = req.body.site || 1;
		var dataTest= await EducationTests.find({
			where: {
				'id': testId,
				'software': software
			},
			limit: 1
		});
		res.json(dataTest[0]);

	},
	//Hàm trả về mảng các câu hỏi và câu trả lời( đề trắc nghiệm ) với input testId
	getQuestionsAnswers: async function(req, res){
		var testId= req.body.test_id;		
		testId = '%,'+testId+ ',%';
		var software = req.body.software || 1;
    	var site = req.body.site || 1;
		var dataQuestions = await EducationQuestions.find({
			where: {
				'testId': { like:  testId},
				'software': software
			},
			select:['id', 'request', 'name', 'name_vn', 'testId', 'questionType', 'status', 'audio', 'translation', 'hasImage', 'hasAudio', 'medias', 'explaination', 'teacher_answers']
		}).populate('ref_question_answers');
		res.json(dataQuestions);
	},
	//Hàm trả về mảng các câu hỏi và câu trả lời( đề tự luận ) với input testId
	getQuestionsAnswersTl: async function(req, res){
		var testId= req.body.test_id;
		var software = req.body.software || 1;
    	var site = req.body.site || 1;
		testId = '%,'+testId+ ',%';
		var dataQuestions = await EducationQuestions.find({
			where: {
				'testId': { like:  testId},
				'software': software
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
		var startTime = new Date(req.body.startTime * 1000);
		var stopTime = new Date(req.body.stopTime * 1000);
		var userId = req.body.userId;
		var username = req.body.username;
		var duringTime = req.body.duringTime;
		var rank = req.body.rank;
		var quantity_question = req.body.quantity_question;
		var lang = req.body.lang;
		var compability = req.body.compability;
		var parentTest = req.body.parentTest;		
		var keybook = testId + userId + duringTime;
		var test_name = req.body.test_name;
		var test_name_sn = req.body.test_name_sn;
		var software = req.body.software || 1;
    	var site = req.body.site || 1;
		var md5 = require('md5');
		keybook =md5(keybook);
		var S = require('string');
		keybook = S(keybook).left(13).toString();
		//update bang user_book
		var userbook= await EducationUserBooks.create({
			'testId' : testId,
			'categoryId': categoryId,
			'mark' : mark,
			'startTime': startTime,
			'stopTime': stopTime,
			'userId' : userId,
			'duringTime' : duringTime,
			'rank' : rank,
			'quantity_question' : quantity_question,
			'lang' : lang,
			'compability' : compability,
			'parentTest' : parentTest,
			'keybook' : keybook,
			'software': software
		}).fetch();
		//update bang user_answers
		questions.forEach( async function(question, index) {
			var user_book_id = userbook['id'];
			var questionId = question['questionId'];
			var answerId = question['answerId']; 
			var software = req.body.software || 1;
    		var site = req.body.site || 1;
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
				name: test_name,
				name_sn: test_name_sn,
				software: software
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
		var rating = await EducationUserBookRatings.findOne({
			userId: userId,
			testId: testId
		});
		var result = {
			success: 1,
			error: 0,
			data: {
				userbookId: userbook.id,
				rating: rating
			}
		};
		res.json(result);
	},
	// laay xep hang cua de thi
	getRating: async function(req, res){
		var testId = parseInt(req.body.testId);
		var mark = parseFloat(req.body.mark);
		var duringTime = parseInt(req.body.duringTime);
		var totalRating = await EducationUserBooks.count({
			testId: testId
		});
		var userRating = await EducationUserBooks.count({
			testId: testId,
			'or': [
				{
					mark: {
						'>': mark
					}
				},
				{
					mark: mark,
					duringTime: {
						'<' : duringTime
					}
				}
			]
		});
		var result = {
			rating: userRating,
			total: totalRating
		};
		res.json(result);
	},
	
	
};