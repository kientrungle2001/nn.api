module.exports= {
	// Hàm lấy chủ đề của các môn học
	getTopics: async function(req, res){
		var subject_id = req.body.subject_id;
		subject_id = '%,'+ subject_id +',%';
		var dataTopics = await CoreCategories.find({
			where: {
				'status': 1,
				'display': 1,
				'document': 0,
				'parents': { like: subject_id},
				'classes': {like : '%,5,%'},
				'software': 1,
				'site': [0, 1]
			},
			sort: 'ordering ASC'
		});
		return res.json(dataTopics);
	},
	getVocabularyTopics: async function(req, res){
		var subject_id = req.body.subject_id;
		subject_id = '%,'+ subject_id +',%';
		var dataTopics = await CoreCategories.find({
			where: {
				'status': 1,
				'display': 1,
				'document': 1,
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
		var subject_id = req.body.subject_id;
		var topic_id = req.body.topic_id;
		topic_id = '%,'+topic_id+',%';
		var getQuantity = await EducationQuestions.count({
			where: {
				'status': 1,				
				'categoryIds':{ like:  topic_id},
				'classes': {like : '%,5,%'},				
			}
		});
		getQuantity = Math.ceil(getQuantity/5);
		return res.json(getQuantity);
	},
	// Lấy câu hỏi của bài tập
	getExerciseQuestions: async function(req, res){
		var subject_id = req.body.subject_id;
		var topic_id = req.body.topic_id;
		var exercise_number = req.body.exercise_number;
		var skip_records = 5*(exercise_number-1);
		var dataQuestions = await EducationQuestions.find({
			where: {
				'status': 1,				
				'categoryIds':{ like:  topic_id},
				'classes': {like : '%,5,%'},
			},
			select:['id', 'request', 'name', 'name_vn', 'categoryIds', 'questionType', 'status', 'audio', 'translation', 'hasImage', 'hasAudio', 'medias'],
			limit: 5,
			skip: skip_records,
			sort: 'ordering ASC'			
		}).populate('ref_question_answers');
		res.json(dataQuestions);
	},

};