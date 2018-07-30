
module.exports = {
  tableName: 'categories',
  attributes: {

    name: {
        type: 'string',
        columnType: 'varchar'
    },
	name_vn: {
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
	classes: {
        type: 'string',
        columnType: 'varchar'
    },
    router: {
        type: 'string',
        columnType: 'varchar'
    },
    alias: {
        type: 'string',
        columnType: 'varchar'
    },
    ordering: {
        type: 'number',
        columnType: 'int'
    },
    userId: {
        type: 'number',
        columnType: 'int'
    },
    img: {
        type: 'string',
        columnType: 'varchar'
    },
    display: {
        type: 'number',
        columnType: 'tinyint'
    },
	document: {
        type: 'number',
        columnType: 'tinyint'
    },
    software: {
        type: 'number',
        columnType: 'int'
    },
	site: {
        type: 'number',
        columnType: 'int'
    },
  },
  
};