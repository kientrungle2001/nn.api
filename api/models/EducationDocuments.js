module.exports = {
  tableName: 'document',
  attributes: {

    title: {
        type: 'string',
        columnType: 'varchar'
    },
    categoryIds: {
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
    likes: {
        type: 'number',
        columnType: 'int'
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
    meta_keywords: {
        type: 'string',
        columnType: 'varchar'
    },
    meta_description: {
        type: 'string',
        columnType: 'varchar'
    },
    campaignId: {
        type: 'number',
        columnType: 'int'
    },

    software: {
        type: 'number',
        columnType: 'int'
    },
    global: {
        type: 'number',
        columnType: 'int'
    },
    sharedSoftwares: {
        type: 'string',
        columnType: 'varchar'
    },
    startDate: {
        type: 'ref',
        columnType: 'datetime'
    },
    endDate: {
        type: 'ref',
        columnType: 'datetime'
    },
    classes: {
        type: 'string',
        columnType: 'varchar'
    },
    downloads: {
        type: 'number',
        columnType: 'int'
    },
    type: {
        type: 'string',
        columnType: 'varchar'
    },
    trial: {
        type: 'number',
        columnType: 'tinyint'
    },
    displayAtSite: {
        type: 'number',
        columnType: 'int'
    },
    hidden: {
        type: 'number',
        columnType: 'int'
    },
    en_title: {
        type: 'string',
        columnType: 'varchar'
    },
    tdn_title: {
        type: 'string',
        columnType: 'varchar'
    },
    
  }
};