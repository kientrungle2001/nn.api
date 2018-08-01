module.exports={
	tableName: 'consultants',
	attributes: {
		'name': {
			type: 'string',
			columnType: 'varchar'
		},
		'email': {
			type: 'string',
			columnType: 'varchar'
		},
		'phone': {
			type: 'string',
			columnType: 'varchar'
		},
		'status': {
			type: 'number',
			columnType: 'tinyint'
		},
		'note': {
			type: 'string',
			columnType: 'text'
		},
		'creatorId': false,		
		'modifiedId': false,
	}
};