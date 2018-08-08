module.exports= {
	tableName: 'user_book_rating',
	attributes: {
		userId: {
			type:'number',
			columnType: 'int'
		},
		startTime: {
			type:'ref',
			columnType: 'datetime'
		},
		mark: {
			type:'number',
			columnType: 'int'
		},
		duringTime: {
			type:'number',
			columnType: 'int'
		},
		testId: {
			type:'number',
			columnType: 'int'
		},
		username: {
			type:'string',
			columnType: 'varchar'
		},
		name: {
			type:'string',
			columnType: 'varchar'
		},
		name_sn: {
			type:'string',
			columnType: 'varchar'
		},
		software: {
			type:'number',
			columnType: 'int'
		},
		areacode: {
			type:'number',
			columnType: 'int'
		},
		created: false,
		creatorId: false,
		modified: false,
		modifiedId: false,
		status: false
	}
};