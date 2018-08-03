module.exports = {
	tableName : 'game',
	attributes: {
		question:{
			type: 'string',
			columnType: 'text'
		},
		gamecode:{
			type: 'string',
			columnType: 'varchar'
		},
		datatrue:{
			type: 'string',
			columnType: 'text'
		},
		dataword:{
			type: 'string',
			columnType: 'text'
		},
		game_topic_id:{
			type: 'string',
			columnType: 'varchar'
		},
		userId:{
			type: 'number',
			columnType: 'int'
		},
		linkgame:{
			type: 'string',
			columnType: 'varchar'
		},
		documentId:{
			type: 'number',
			columnType: 'int'
		},
		software:{
			type: 'number',
			columnType: 'int'
		},
		status:{
			type: 'number',
			columnType: 'int'
		},

		
	}
};