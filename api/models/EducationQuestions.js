module.exports = {
  tableName: 'questions',
  attributes: {

    request: {
        type: 'string',
        columnType: 'varchar'
    },
    name: {
        type: 'string',
        columnType: 'text'
    },
    name_vn: {
        type: 'string',
        columnType: 'text'
    },
    categoryIds: {
        type: 'string',
        columnType: 'varchar'
    },
    level: {
        type: 'number',
        columnType: 'int'
    },
    trial: {
        type: 'number',
        columnType: 'tinyint'
    },
    testId: {
        type: 'string',
        columnType: 'varchar'
    },
    questionType: {
        type: 'number',
        columnType: 'tinyint'
    },
    type: {
        type: 'string',
        columnType: 'varchar'
    },
    topic_id: {
        type: 'number',
        columnType: 'int'
    },
    topic_name: {
        type: 'string',
        columnType: 'varchar'
    },
    software: {
        type: 'number',
        columnType: 'int'
    },
    type_id: {
        type: 'number',
        columnType: 'int'
    },
    make: {
        type: 'number',
        columnType: 'tinyint'
    },
    ordering: {
        type: 'number',
        columnType: 'int'
    },
    check: {
        type: 'number',
        columnType: 'tinyint'
    },
    deleted: {
        type: 'number',
        columnType: 'tinyint'
    },
    classes: {
        type: 'string',
        columnType: 'varchar'
    },
    global: {
        type: 'number',
        columnType: 'int'
    },
     sharedSoftwares: {
        type: 'string',
        columnType: 'varchar'
    },
    audio: {
        type: 'string',
        columnType: 'varchar'
    },
    teacherIds: {
        type: 'string',
        columnType: 'varchar'
    },
    teacher_answers: {
        type: 'string',
        columnType: 'text'
    },
    translation: {
        type: 'string',
        columnType: 'text'
    },
    answerTranslation: {
        type: 'string',
        columnType: 'text'
    },
    explaination: {
        type: 'string',
        columnType: 'text'
    },
    translated: {
        type: 'number',
        columnType: 'tinyint'
    },
    lock: {
        type: 'number',
        columnType: 'tinyint'
    },
    hasImage: {
        type: 'number',
        columnType: 'tinyint'
    },
    hasAudio: {
        type: 'number',
        columnType: 'tinyint'
    },
    medias: {
        type: 'string',
        columnType: 'varchar'
    },
    auto: {
        type: 'number',
        columnType: 'tinyint'
    },
    //Khai bao tham chieu den model EducationQuestionAnswers
    ref_question_answers:{
        collection: 'EducationQuestionAnswers',
        via: 'question_id'
    }
  },

};