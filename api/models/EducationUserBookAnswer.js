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
     /*created: function(){
        var obj = this.toObject();
        delete o j.created;
        return obj;

    },
    creatorId: function(){
        var obj = this.toObject();
        delete obj.creatorId;
        return obj;

    },
    modified: function(){
        var obj = this.toObject();
        delete obj.modified;
        return obj;

    },
    modifiedId: function(){
        var obj = this.toObject();
        delete obj.modifiedId;
        return obj;

    },*/

  }
};