module.exports= {
	tableName:'aqs_question',
	attributes: {
		'question':{
			type: 'string',
			columnType: 'text'
		},
		'answer':{
			type: 'number',
			columnType: 'int'
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