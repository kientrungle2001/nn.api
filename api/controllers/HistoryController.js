
module.exports = {
  
  getLessons: async function(req, res){
    var numberPage= req.body.numberPage;
    var userId = req.body.userId;    
    var skipRecords = numberPage * 20;    
    var dataLessonSql = `
    SELECT user_book.id,user_book.userId,user_book.categoryId, categories.name,user_book.startTime,user_book.quantity_question,user_book.stopTime, user_book.mark, user_book.duringTime, user_book.created, user_book.exercise_number, user_book.topic, user_book.lang
    FROM user_book, categories
    WHERE user_book.topic = categories.id AND user_book.userId = $1
    ORDER BY user_book.id desc
    LIMIT 20
    OFFSET `+skipRecords;
    // Send it to the database.
    var dataLessons = await sails.sendNativeQuery(dataLessonSql, [userId]);    
    res.json(dataLessons.rows); 
  },
  countLessons: async function(req, res){
    var userId = req.body.userId; 
    var software = req.body.software || 1;
    var site = req.body.site || 1;   
    var quantityLessons= await EducationUserBooks.count({ userId: userId, testId: 0,software: software});    
    res.json(quantityLessons);
  },
  getTests: async function(req, res){
    var numberPage= req.body.numberPage;
    var userId = req.body.userId;
    var categoryId = req.body.categoryId;
    var skipRecords = numberPage * 20;
    var dataTestSql = `
      SELECT user_book.id,user_book.userId,user_book.testId,user_book.categoryId, tests.name,user_book.startTime,user_book.quantity_question,user_book.stopTime, user_book.mark, user_book.duringTime, user_book.created, user_book.compability, user_book.lang
      FROM user_book, tests
      WHERE user_book.testId = tests.id  AND user_book.categoryId = $1 AND user_book.userId = $2 
      ORDER BY user_book.id desc
      LIMIT 20
      OFFSET `+skipRecords;
    
    // Send it to the database.
    var dataTests = await sails.sendNativeQuery(dataTestSql, [categoryId, userId]);      
    res.json(dataTests.rows); 
  },
  countTests: async function(req, res){
    var userId = req.body.userId;
    var software = req.body.software || 1;
    var site = req.body.site || 1;
    var categoryId = req.body.categoryId;    
    var quantityTests= await EducationUserBooks.count({
        userId: userId,        
        categoryId: categoryId,   
        testId : {'>': 0},    
        software: software
    });    
    res.json(quantityTests);    
  },
  getDetailLesson: async function(req, res){
    var userbookId = req.body.userBookId;
    var userId= req.body.userId;      
    var dataUserBook = await EducationUserBooks.find({
      where: {id: userbookId, userId: userId},
      select: ['id', 'quantity_question','testId', 'mark','lang'],
      limit: 1
    }).populate('ref_userbook_answers');    
    res.json(dataUserBook[0]);
  },
  getQuestionAnswers: async function(req, res){
    // Lay danh sach cac cau hoi va tra loi tu bang questions
    var questionIds = req.body.questionIds;    
    var dataQuestions = await EducationQuestions.find({
      where: {        
        'id': {in:questionIds }             
      },
      select:['id', 'request', 'name', 'name_vn', 'status', 'audio', 'translation', 'hasImage', 'hasAudio', 'medias'],
  
    }).populate('ref_question_answers');
    res.json(dataQuestions);
  },
  getDetailTest: async function(req, res){
    var userbookId= req.body.userbookId;
    var userId= req.body.userId;
    var dataUserBook = await EducationUserBooks.find({
      where: {id: userbookId, userId: userId},
      select: ['id', 'quantity_question', 'mark'],
      limit: 1
    }).populate('ref_userbook_answers');    
    res.json(dataUserBook[0]);
  },
  getTestAlls: async function(req, res){
    var numberPage= req.body.numberPage;
    var userId = req.body.userId;    
    var skipRecords = numberPage * 20;
    var dataTestSql = `
      SELECT user_book.id,user_book.userId,user_book.testId,user_book.categoryId, tests.name,user_book.startTime,user_book.quantity_question,user_book.stopTime, user_book.mark, user_book.duringTime, user_book.created, user_book.compability, user_book.lang
      FROM user_book, tests
      WHERE user_book.testId = tests.id AND user_book.userId = $1
      ORDER BY user_book.id desc
      LIMIT 20
      OFFSET `+skipRecords;
    
    // Send it to the database.
    var dataTests = await sails.sendNativeQuery(dataTestSql, [ userId]);      
    res.json(dataTests.rows); 
  },
  countTestAlls: async function(req, res){
    var userId = req.body.userId;
    var software = req.body.software || 1;
    var site = req.body.site || 1;     
    var quantityTests= await EducationUserBooks.count({
        userId: userId,            
        testId : {'>': 0},    
        software: software
    });    
    res.json(quantityTests);    
  },
  
  signup: async function (req, res) {  },

};