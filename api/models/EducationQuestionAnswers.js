module.exports = {
  tableName: 'answers_question_tn',
  attributes: {

    question_id: {
        type: 'number',
        columnType: 'int'
    },
    content: {
        type: 'string',
        columnType: 'text'
    },
    content_vn: {
        type: 'string',
        columnType: 'text'
    },
    content_full: {
        type: 'string',
        columnType: 'text'
    },
    recommend: {
        type: 'string',
        columnType: 'text'
    },
    date_modify: {
        type: 'ref',
        columnType: 'datetime'
    },
    admin_modify: {
        type: 'number',
        columnType: 'int'
    },
    translation: {
        type: 'string',
        columnType: 'text'
    },
    'creatorId': false,
    'modified': false,
    'modifiedId': false,
    //Khai bao tham chieu den model EducationQuestions
    question_id:{
        model: 'EducationQuestions'
    }

  }
};