module.exports= {
	tableName: 'order_card',
	attributes: {
		'quantity': {
			type: 'number',
			columnType: 'int'
		},
		'fullname': {
			type: 'string',
			columnType: 'varchar'
		},
		'address': {
			type: 'string',
			columnType: 'varchar'
		},
		'phone': {
			type: 'string',
			columnType: 'varchar'
		},
		'amount': {
			type: 'number',
			columnType: 'int'
		},
		'date': {
			type: 'ref',
			columnType: 'datetime'
		},
		'note': {
			type: 'string',
			columnType: 'text'
		},

		'status': {
			type: 'number',
			columnType: 'tinyint'
		},
		'created': false,
		'modified': false,
		'creatorId': false,
		'modifiedId': false,

	}
};