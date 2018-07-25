module.exports = {
	testApi: async function(req, res){
		// test CoreCategories
		/*var testCategories = await CoreCategories.find({'id': 1});
		res.json(testCategories);*/
		// test CoreUsers
		/*var testUsers = await CoreUsers.find({'id': 7});
		res.json(testUsers);*/
		// test EcommercePayments
		/*var testPayments = await EcommercePayments.find({'id': 18});
		res.json(testPayments);*/
		// test EducationDocuments
		/*var testDocuments = await EducationDocuments.find({'id': 69});
		res.json(testDocuments);*/
		// test EducationQuestions
		/*var testQuestions = await EducationQuestions.find({'id': 69});
		res.json(testQuestions);*/
		// test EducationQuestionAnswers
		/*var testQuestionAnswers = await EducationQuestionAnswers.find({'question_id': 69});
		res.json(testQuestionAnswers);*/
		// test EducationTests
		/*var testTests = await EducationTests.find({'id': 21});
		res.json(testTests);*/
		// Hiển thị danh sách các môn học
		var showSubjects = await CoreCategories.showSubjects();
		res.json(showSubjects);
		
	}
};