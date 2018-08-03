module.exports = {
	getDocuments : async function(req, res){
		var categoryId = req.body.categoryId;		
		var dataDocuments = await EducationDocuments.find({
			where: {
				'categoryId': categoryId,
				'status': 1,
				'type': 'document',
				'software': 1
			},
		});
		res.json(dataDocuments);
	},
};