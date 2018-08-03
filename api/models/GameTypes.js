module.exports = {
	tableName : 'game_type',
	attributes: {
		game_type:{
			type: 'string',
			columnType: 'varchar'
		},
		userId:{
			type: 'number',
			columnType: 'int'
		},
		gamecode:{
			type: 'string',
			columnType: 'varchar'
		},
		vocabulary:{
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
		created: false,
		modified: false,
		creatorId: false,
		
		
	}
};