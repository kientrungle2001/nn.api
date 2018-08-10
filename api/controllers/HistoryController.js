
module.exports = {
  getUser: async function (req, res) {
    var userId= req.body.userId;     
    var getDataUser = await CoreUsers.findOne({id: userId}); 
    if(getDataUser){      
      res.json(getDataUser);  
    }   else res.json("False");   
  },
  editUser: async function(req, res){     
    var txtUserId= req.body.userId;
    var txtName= req.body.name;    
    var txtEmail= req.body.email;
    var txtPhone= req.body.phone;
    var txtAddress= req.body.address; 
    var txtBirthday= req.body.birthday; 
    var txtSex= req.body.sex;
    var txtSchool= req.body.schoolname;
    var txtClass= req.body.classname;
    var txtAreacode= req.body.areacode; 
    var dateUpdate = await CoreUsers.update({id: txtUserId}).set({
      'name': txtName,      
      'email': txtEmail,
      'phone': txtPhone,
      'address': txtAddress,
      'birthday': txtBirthday,
      'sex': txtSex,
      'classname': txtClass,
      'schoolname': txtSchool,
      'areacode': txtAreacode,
    });    
    res.json({
      success: 1,
      message:'Cập nhật thành công!'
    });
  },
  editPassword: async function(req, res){
    var txtUserId= req.body.userId;
    var txtOldPassword= req.body.oldPassword;
    var txtNewPassword= req.body.newPassword;    
    var getDataUser = await CoreUsers.findOne({id: txtUserId});
    var password = getDataUser['password'];
    var md5 = require('md5');
    if(md5(txtOldPassword) == password ){
        var md5NewPassword = md5(txtNewPassword);
        await CoreUsers.update({id: txtUserId}).set({'password':md5NewPassword});
        res.json({
          success: 1,
          message: 'Thay đổi thành công!'
        });
    }else res.json({
      success: 0,
      message: 'Mật khẩu cũ chưa đúng.'
    });
  },
  editAvatar: async function(req, res){
    var txtUserId= req.body.userId;
    var urlAvatar = req.body.avatar;
    await CoreUsers.update({id: txtUserId}).set({'avatar':urlAvatar});
    res.json(1);
  },
  getLessons: async function(req, res){
    var numberPage= req.body.numberPage;
    var userId = req.body.userId;    
    var skipRecords = numberPage * 20;
    var dataLessons= await EducationUserBooks.find({
      where: { userId: userId, testId: 0,software: 1},
      select: ['id', 'userId', 'categoryId', 'startTime', 'quantity_question', 'stopTime', 'mark', 'duringTime', 'created', 'exercise_number', 'topic', 'lang'],
      skip: skipRecords,
      limit: 20,
      sort: 'created DESC'
    }).populate('topic');
    res.json(dataLessons); 
  },
  countLessons: async function(req, res){
    var userId = req.body.userId;    
    var quantityLessons= await EducationUserBooks.count({ userId: userId, testId: 0,software: 1});    
    res.json(quantityLessons);
  },
  getTests: async function(req, res){
    var numberPage= req.body.numberPage;
    var userId = req.body.userId;
    //var categoryId = req.body.categoryId;
    var compability = req.body.compability;    
    if(compability == 1){
      var populateTest = 'parentTest';
    }else var populateTest = 'testId';
    var skipRecords = numberPage * 20;
    var dataTests= await EducationUserBooks.find({
      where: { 
        userId: userId,        
        compability: compability,
        //categoryId: categoryId,
        software: 1       
      },
      select: ['id', 'userId', 'testId','parentTest','categoryId', 'startTime', 'quantity_question', 'stopTime', 'mark', 'duringTime', 'created', 'compability', 'lang'],
      skip: skipRecords,
      limit: 20,
      sort: 'created DESC'
    }).populate(populateTest);   
    res.json(dataTests); 
  },
  countTests: async function(req, res){
    var userId = req.body.userId;
    var compability = req.body.compability;    
    var quantityTests= await EducationUserBooks.count({
        userId: userId,        
        compability: compability,       
        software: 1
    });    
    res.json(quantityTests);    
  },
  getDetailLesson: async function(req, res){
    var userbookId= req.body.userbookId;
    /*var userbookId= 361392;*/
    var dataUserBook = await EducationUserBooks.findOne({
      where: {id: userbookId, software: 1},
      select: ['id', 'quantity_question', 'mark']
    }).populate('ref_userbook_answers');    
    res.json(dataUserBook);
  },
  getQuestionAnswers: async function(req, res){
    // Lay danh sach cac cau hoi va tra loi tu bang questions
    var questionIds = req.body.questionIds;
    var dataQuestions = await EducationQuestions.find({
      where: {
        'status': 1,
        'id': {in:questionIds },
        'software': 1        
      },
      select:['id', 'request', 'name', 'name_vn', 'status', 'audio', 'translation', 'hasImage', 'hasAudio', 'medias'],
  
    }).populate('ref_question_answers');
    res.json(dataQuestions);
  },
  getDetailTest: async function(req, res){
    /*var userbookId= req.body.userbookId;*/
    var userbookId= 776381;
    var dataUserBook = await EducationUserBooks.findOne({
      where: {id: userbookId, software: 1},
      select: ['id', 'quantity_question', 'mark']
    }).populate('ref_userbook_answers');    
    res.json(dataUserBook);
  },
  signup: async function (req, res) {  },

};