module.exports= {
	// Hàm lấy chủ đề của các môn học
	getTopics: async function(req, res){
		var subject_id = req.body.subject_id;
		subject_id = '%,'+ subject_id +',%';
		var dataTopics = await CoreCategores.find({
			where: {
				'status': 1,
				'display': 1,
				'parents': { like: subject_id},
				'classes': {like : '%,5,%'}
			},
			sort: 'ordering ASC'
		});
		return res.json(dataTopics);
	},
	// Lấy tư vựng các môn
	getVocabularies: async function(req, res){
		var subject_id = req.body.subject_id;
		var datagetVocabularies = await EducationDocuments.find({
			where: {
				'status': 1,
				'display': 1,
				'categoryId': subject_id,
				'classes': {like : '%,5,%'},
				'type': 'vocabulary',
				'hidden': 0
			},
			sort: 'ordering ASC'
		});
		return res.json(datagetVocabularies);
	},
	// Lấy danh sách bài tập
	getExercises: async function(req, res){

	},
	// Lấy câu hỏi của bài tập
	getExerciseQuestions: async function(req, res){

	},

};