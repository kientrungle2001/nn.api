module.exports = {
  tableName: 'coupon',
  attributes: {
  
    resellerId: {
        type: 'number',
        columnType: 'int'
    },
    serviceId: {
        type: 'number',
        columnType: 'int'
    },
    code: {
        type: 'string',
        columnType: 'varchar'
    },
    discount: {
        type: 'ref',
        columnType: 'double'
    },
    resellerDiscount: {
        type: 'ref',
        columnType: 'double'
    },
    software: {
        type: 'number',
        columnType: 'int'
    },
    site: {
        type: 'number',
        columnType: 'int'
    },
    startDate: {
        type: 'ref',
        columnType: 'datetime'
    },
    endDate: {
        type: 'ref',
        columnType: 'datetime'
    },
    status: {
        type: 'number',
        columnType: 'tinyint'
    }
    
  }
};