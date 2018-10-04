module.exports = {
  tableName: 'history_payment',
  attributes: {
    username: {
        type: 'string',
        columnType: 'varchar'
    },
    amount: {
        type: 'number',
        columnType: 'int'
    },
    typepayment: {
        type: 'string',
        columnType: 'varchar'
    },
    paymentType: {
        type: 'string',
        columnType: 'varchar'
    },
    paymentOption: {
        type: 'string',
        columnType: 'varchar'
    },
    bank: {
        type: 'string',
        columnType: 'varchar'
    },
    transactioncode: {
        type: 'string',
        columnType: 'varchar'
    },
    billcode: {
        type: 'string',
        columnType: 'varchar'
    },
    paymentStatus: {
        type: 'number',
        columnType: 'tinyint'
    },
    paymentDate: {
        type: 'ref',
        columnType: 'datetime'
    },
    software: {
        type: 'number',
        columnType: 'int'
    },
    site: {
        type: 'number',
        columnType: 'int'
    },
    contestId: {
        type: 'number',
        columnType: 'int'
    },
    class: {
        type: 'number',
        columnType: 'int'
    },
    expiredDate: {
        type: 'ref',
        columnType: 'datetime'
    },
    serviceType: {
        type: 'string',
        columnType: 'varchar'
    },
    serviceName: {
        type: 'string',
        columnType: 'varchar'
    },
    serviceId: {
        type: 'number',
        columnType: 'int'
    },
    resellerId: {
        type: 'number',
        columnType: 'int'
    },
    categoryIds: {
        type: 'string',
        columnType: 'varchar'
    },

    languages: {
        type: 'string',
        columnType: 'varchar'
    },
    cardCode: {
        type: 'string',
        columnType: 'varchar'
    },
    cardSerial: {
        type: 'string',
        columnType: 'varchar'
    },
    coupon: {
        type: 'string',
        columnType: 'varchar'
    },
    contestIds: {
        type: 'string',
        columnType: 'varchar'
    },
  }
};