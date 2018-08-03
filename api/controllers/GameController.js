module.exports = {
	getType : async function(req, res){
		var dataTypeGame = await GameTypes.find({
			'software': 1,
			'vocabulary': 0,
			'status': 1
		});
		res.json(dataTypeGame);
	},
	getTopic: async function(req, res){
		//var gameType = req.gameType;
		var gameType ='dragWord';
		if(gameType == 'muatu'){
			var dataGame = await GameTopics.find({
				where: {
					'software': 1,
					'status': 1
				},
				select: ['id','game_topic','parent']
			});

		}else if(gameType == 'dragWord'){
			var dataGame = await Games.find({
				where: {
					'software': 1,
					'status': 1,
					'gamecode': 'dragWord'
				},
				select: ['id','question','game_topic_id','gamecode','linkgame','documentId']
			});
		}
		res.json(dataGame);
	},
	getGame : async function(req, res){}
};