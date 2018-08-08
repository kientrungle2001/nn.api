module.exports= {
	tableName: 'gamescore',
	attributes: {
		userId: {
			type: 'number',
			columnType:'int'
		},
		gamecode: {
			type: 'string',
			columnType:'varchar'
		},
		gametopic: {
			type: 'string',
			columnType:'varchar'
		},
		score: {
			type: 'number',
			columnType:'float'
		},
		live: {
			type: 'number',
			columnType:'float'
		},

		software: {
			type: 'number',
			columnType:'int'
		},
		status: {
			type: 'number',
			columnType:'tinyint'
		},
		documentId: {
			type: 'number',
			columnType:'int'
		},
		totalWord: {
			type: 'number',
			columnType:'int'
		},
		trueWords: {
			type: 'string',
			columnType:'mediumtext'
		},
		categoryId: {
			type: 'number',
			columnType:'int'
		},
		creatorId: false,
		modifiedId: false,
		
	}
};