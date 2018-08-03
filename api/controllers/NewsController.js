module.exports= {
	getNews : async function(req, res){
		var categoryId = req.body.categoryId;		
		var dataNews = await CmsNews.find({
			where:{'categoryId': categoryId, 'status': 1},			
			sort: 'ordering ASC'
		});
		res.json(dataNews);
	},
	getGifts: async function(req, res){
		var dataCategories = await CoreCategories.find({
			where: {status: 1, 'parent': 137}
		});
		var categoryIds = [];
		for(var i = 0; i < dataCategories.length; i++) {
			categoryIds.push(dataCategories[i].id);
		}
		var dataNews = await CmsNews.find({
			where:{'status': 1, categoryId: categoryIds},
			sort: 'ordering ASC',
			limit: 5
		});
		res.json(dataNews);
	}
};