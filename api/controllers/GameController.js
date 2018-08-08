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
		var gameType = req.gameType;		
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
				//select: ['id','question','game_topic_id','gamecode','linkgame','documentId']
			});
		}
		res.json(dataGame);
	},
	getScores: async function(req, res) {
		var gameCode = req.body.gamecode;
		var gameTopic = req.body.topic;						
		var NAMES_OF_PETS_SQL = `
		SELECT gamescore.userId,gamescore.gametopic,gamescore.gamecode,gamescore.score,gamescore.live,user.username, user.name
		FROM gamescore, user
		WHERE gamescore.gamecode = $1 AND gamescore.gametopic = $2 AND gamescore.userId = user.id
		GROUP BY gamescore.userId
		ORDER BY gamescore.score desc,gamescore.live desc
		LIMIT 10`;
		// Send it to the database.
		var dataScores = await sails.sendNativeQuery(NAMES_OF_PETS_SQL, [ gameCode, gameTopic ]);
		if(dataScores){
			res.json(dataScores.rows);
		}else res.json(0);		
		
	},
	gameSave : async function(req, res){
		var check = req.body.check;
		var gametopic = req.body.gametopic;
		var gamecode = req.body.gamecode;
		var score = req.body.score;
		var live = req.body.live;
		var userId = req.body.userId;				 
		if(check== 1){
			// insert database
			var dataScores = await GameScores.create({
				'gametopic': gametopic,
				'gamecode': gamecode,
				'score': score,
				'live': live,
				'userId': userId,
				'software': 1							
			}).fetch();
			// lấy xếp hạng game
			var insertId = dataScores['id'];
			var dataRating = await GameScores.find({
				where: {
					gametopic: gametopic,
					gamecode: gamecode
				},
				select: ['id'],
				sort: [{score: 'DESC'}, {live: 'DESC'}]
			});
			var rating =  dataRating.findIndex(element => element['id']===insertId);
			var quantity = dataRating.length;
			var stringRating = rating +'/' + quantity;
			res.json(stringRating);
		}else res.json(0);
	},
	

};