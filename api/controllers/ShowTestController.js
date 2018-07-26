module.exports = {
	// Hàm trả về 1 bản ghi trong bảng test, với input: testId
	getTest: async function(req, res){
		var testId= req.body.test_id;
		var dataTest= await EducationTests.findOne({'id': testId});
		res.json(dataTest);

	},
	//Hàm trả về mảng các câu hỏi trong bảng questions với input testId
	getQuestions: async function(req, res){
		var testId= req.body.test_id;
		testId = '%,'+testId+ ',%';
		var dataQuestions = await EducationQuestions.find({
			where: {
				'testId': { like:  testId}
			},
			select:['id', 'request', 'name', 'name_vn', 'testId', 'questionType', 'status', 'audio', 'translation', 'hasImage', 'hasAudio', 'medias']
		});
		res.json(dataQuestions);
	},
	// Hàm trả về danh sách các đáp án của câu hỏi với input questionId & questionType
	getAnswers: async function(req, res){
		var questionId= req.body.question_id;
		var questionType= req.body.question_type;
		if(questionType == 1){
			var dataAnswers = await EducationQuestionAnswers.find({
				'question_id': questionId
			});
			res.json(dataAnswers);
		} res.json(0);
	},
};