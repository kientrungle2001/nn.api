module.exports = {
  tableName: 'user_answers',
  attributes: {

    user_book_id: {
        type: 'number',
        columnType: 'int'
    },
    answerId: {
        type: 'number',
        columnType: 'int'
    },
    questionId: {
        type: 'ref',
        columnType: 'datetime'
    },
    question_type: {
        type: 'string',
        columnType: 'varchar'
    },
    content: {
        type: 'string',
        columnType: 'text'
    },
    content_edit: {
        type: 'string',
        columnType: 'text'
    },
    mark: {
        type: 'number',
        columnType: 'double'
    },
    recommend_mark: {
        type: 'string',
        columnType: 'text'
    },
    accept: {
        type: 'string',
        columnType: 'text'
    },
    isMark: {
        type: 'number',
        columnType: 'tinyint'
    },
    teacherIdMark: {
        type: 'number',
        columnType: 'int'
    },
   status: false,
    creatorId: false,
    created: false,
    modified: false,
    modifiedId: false,
    // Lieen ket voi model EducationUserBooks
    user_book_id: {
        model: 'EducationUserBooks'
    }

  }
};