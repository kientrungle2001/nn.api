module.exports= {
	tableName: 'card_nextnobels',
	attributes: {
		pincard: {
			type: 'string',
			columnType: 'varchar'
		},
		pincard_normal: {
			type: 'string',
			columnType: 'varchar'
		},
		serial: {
			type: 'string',
			columnType: 'varchar'
		},
		price: {
			type: 'number',
			columnType: 'int'
		},
		discount: {
			type: 'number',
			columnType: 'int'
		},
		languages: {
			type: 'string',
			columnType: 'varchar'
		},
		time: {
			type: 'number',
			columnType: 'int'
		},
		promotion: {
			type: 'number',
			columnType: 'tinyint'
		},
		quantity: {
			type: 'number',
			columnType: 'int'
		},
		startDate: {
			type: 'ref',
			columnType: 'datetime'
		},
		endDate: {
			type: 'ref',
			columnType: 'datetime'
		},
		activedId:{
			type: 'number',
			columnType: 'int'
		},
		status: {
			type: 'number',
			columnType: 'tinyint'
		},

	}
};