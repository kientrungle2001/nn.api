
module.exports = {
  tableName: 'news',
  attributes: {

    title: {
        type: 'string',
        columnType: 'varchar'
    },
    categoryId: {
        type: 'number',
        columnType: 'int'
    },
    brief: {
        type: 'string',
        columnType: 'text'
    },
    content: {
        type: 'string',
        columnType: 'text'
    },
    views: {
        type: 'number',
        columnType: 'int'
    },
    hits: {
        type: 'number',
        columnType: 'int'
    },
    comments: {
        type: 'number',
        columnType: 'int'
    },
    img: {
        type: 'string',
        columnType: 'text'
    },
    alias: {
        type: 'string',
        columnType: 'text'
    },
    file: {
        type: 'string',
        columnType: 'varchar'
    },
    ordering: {
        type: 'number',
        columnType: 'int'
    },
    status: {
        type: 'number',
        columnType: 'int'
    },
    software:{
            type: 'number',
            columnType: 'int'
    },
    // Ket noi voi model CmsNewComments
    ref_new_comments: {
        collection: 'CmsNewComments',
        via: 'newsId'
    }
  },
  
};