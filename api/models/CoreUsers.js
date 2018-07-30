module.exports = {
  tableName: 'user',
  attributes: {

    name: {
        type: 'string',
        columnType: 'varchar'
    },
    username: {
        type: 'string',
        columnType: 'varchar'
    },
    password: {
        type: 'string',
        columnType: 'varchar'
    },
    email: {
        type: 'string',
        columnType: 'varchar'
    },
    birthday: {
        type: 'string',
        columnType: 'varchar'
    },
    address: {
        type: 'string',
        columnType: 'varchar'
    },
    phone: {
        type: 'string',
        columnType: 'varchar'
    },
    sex: {
        type: 'number',
        columnType: 'tinyint'
    },
    avatar: {
        type: 'string',
        columnType: 'varchar'
    },
    idFacebook: {
        type: 'string',
        columnType: 'varchar'
    },
    idGoogle: {
        type: 'string',
        columnType: 'varchar'
    },
    areacode: {
        type: 'number',
        columnType: 'int'
    },
    district: {
        type: 'number',
        columnType: 'int'
    },
    class: {
        type: 'number',
        columnType: 'int'
    },
    classname: {
        type: 'string',
        columnType: 'varchar'
    },
    registeredAtSoftware: {
        type: 'number',
        columnType: 'int'
    },
    registeredAtSite: {
        type: 'number',
        columnType: 'int'
    },
    note: {
        type: 'string',
        columnType: 'varchar'
    },
    registered: {
        type: 'ref',
        columnType: 'datetime'
    },
    lastlogined: {
        type: 'ref',
        columnType: 'datetime'
    },
  }
};