module.exports = {
	tableName : 'game_topic',
	attributes: {
		'game_topic_id':{
			type: 'string',
			columnType: 'varchar'
		},
		'userId':{
			type: 'number',
			columnType: 'int'
		},
		'software':{
			type: 'number',
			columnType: 'int'
		},
		'parent':{
			type: 'number',
			columnType: 'int'
		},		
		'status':{
			type: 'number',
			columnType: 'int'
		},
		'created': false,
		'modified': false,
		'creatorId': false,
	}
};