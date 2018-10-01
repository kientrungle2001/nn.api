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

		modified: false,
    creatorId: false,
    modifiedId: false
	}
};
