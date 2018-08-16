module.exports = {
	getQuestions : async function(req, res){
		var pageNumber = req.body.pageNumber;
		var skipNumber = (pageNumber-1)*6;
		var dataQuestions= await AqsQuestions.find({
			where: {
				'status': 1,
			},
			skip: skipNumber,
			limit : 6,
			sort: 'id DESC'
		}).populate('ref_qusestion_answers');
		res.json(dataQuestions);
	},
	/*getQuestionAswers : async function(req, res){
		var questionIds = req.body.questionIds;
		var dataAnswers= await AqsQuestionAnswers.find({
			where: {
				'status': 1,
				'questionId': {in: questionIds}
			}
		});
		res.json(dataAnswers);
	},*/
	countQuestionAswers: async function(req, res){
		var questionId = req.body.questionId;
		var count = await AqsQuestionAnswers.count({'questionId': questionId});
		res.json(count);
	},
	createQuestions: async function(req, res){
		var userId = req.body.userId;
		var username = req.body.username;
		var question = req.body.question;		
		var dateFormat = require('dateformat');
		var now = new Date();
      	var formatNow= dateFormat(now, "yyyy-mm-dd HH:MM:ss");
		await AqsQuestions.create({
			'userId': userId,
			'username': username,
			'question': question,
			'status': 1,
			'created': formatNow			
		});
		res.json(1);
	},
	createQuestionAnswers: async function(req, res){
		var userId = req.body.userId;
		var username = req.body.username;
		var questionId = req.body.questionId;
		var answer = req.body.answer;		
		var dateFormat = require('dateformat');
		var now = new Date();
      	var formatNow= dateFormat(now, "yyyy-mm-dd HH:MM:ss");
		await AqsQuestionAnswers.create({
			'userId': userId,
			'username': username,
			'questionId': questionId,
			'answer': answer,
			'status': 1,
			'created': formatNow
			
		});
		res.json(1);
	},
};