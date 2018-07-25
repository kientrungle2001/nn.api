module.exports = {
  tableName: 'categories',
  attributes: {

    name: {
        type: 'string',
        columnType: 'varchar'
    },
    parent: {
        type: 'number',
        columnType: 'int'
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
    software: {
        type: 'number',
        columnType: 'int'
    },

  }
};