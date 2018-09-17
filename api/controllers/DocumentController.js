module.exports = {
	getDocuments : async function(req, res){
		var categoryId = req.body.categoryId;	
		var software = req.body.software || 1;
    	var site = req.body.site || 1;	
		var dataDocuments = await EducationDocuments.find({
			where: {
				'categoryId': categoryId,
				'status': 1,
				'type': 'document',
				'software': software
			},
		});
		res.json(dataDocuments);
	},
};