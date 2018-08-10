module.exports= {
	tableName: 'areacode',
	attributes: {
		name: {
			type: 'string',
			columnType: 'varchar'
		},
		ordering: {
			type: 'number',
			columnType: 'int'
		},
		type: {
			type: 'string',
			columnType: 'varchar'
		},
		parent: {
			type: 'number',
			columnType: 'int'
		},
		parents: {
			type: 'string',
			columnType: 'varchar'
		},

		mark: {
			type: 'number',
			columnType: 'tinyint'
		},
		
	}
};