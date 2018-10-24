module.exports = {
	tableName : 'question_error',
	attributes: {
		questionId:{
			type: 'number',
			columnType: 'int'
		},
		userId:{
			type: 'number',
			columnType: 'int'
		},
    username: {
			type:'string',
			columnType: 'varchar'
    },
    email: {
			type:'string',
			columnType: 'varchar'
    },
    phone: {
			type:'string',
			columnType: 'varchar'
    },
    note: {
			type:'string',
			columnType: 'text'
    },
    content: {
			type:'string',
			columnType: 'text'
    },
    os: {
      type: 'string',
      columnType: 'varchar'
    },
    browser: {
      type: 'string',
      columnType: 'varchar'
    },
    userAgent: {
      type: 'string',
      columnType: 'varchar'
    },
    categoryId:{
      type: 'number',
      columnType: 'int'
    },
    topic:{
      type: 'number',
      columnType: 'int'
    },
    parentTest:{
      type: 'number',
      columnType: 'int'
    },
    testId:{
      type: 'number',
      columnType: 'int'
    },
    exercise_number:{
      type: 'number',
      columnType: 'int'
    },
		modified: false,
    creatorId: false,
    modifiedId: false
	}
};
