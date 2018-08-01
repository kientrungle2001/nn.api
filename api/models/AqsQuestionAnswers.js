module.exports= {
	tableName:'aqs_answer',
	attributes: {
		'questionId':{
			type: 'number',
			columnType: 'int'
		},
		'answer':{
			type: 'string',
			columnType: 'text'
		},
		'userId':{
			type: 'number',
			columnType: 'int'
		},
		'software':{
			type: 'number',
			columnType: 'int'
		},
		'username':{
			type: 'string',
			columnType: 'varchar'
		},
		'created':{
			type: 'ref',
			columnType: 'datetime'
		},
	},
};