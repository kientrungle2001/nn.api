module.exports = {
	getUser: async function (req, res) {
    var userId= req.body.userId;     
    var getDataUser = await CoreUsers.find({
      where: {id: userId},
      limit: 1
    }); 
    if(getDataUser){      
      res.json(getDataUser[0]);  
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
    var getDataUser = await CoreUsers.find({
      where: {id: txtUserId},
      limit: 1
    });
    var password = getDataUser[0]['password'];
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
    var urlAvatar = req.body.urlAvatar;
    await CoreUsers.update({id: txtUserId}).set({'avatar':urlAvatar});
    res.json({
          success: 1,
          message: 'Thay đổi thành công!'
        });
  },
  getErrorSubject: async function(req,res){
    var userId = req.body.numberRow;
    var numberRow = parseInt(req.body.numberRow);
    var numberPage = parseInt(req.body.numberPage);       
    var skip = numberPage * numberRow;
    var questionErrorSql = `
    SELECT question_error.questionId,question_error.content,question_error.userId,question_error.username,question_error.status,question_error.created,question_error.email,question_error.phone,question_error.note,question_error.os,question_error.userAgent,question_error.categoryId,question_error.topic,question_error.parentTest,question_error.testId,question_error.exercise_number,questions.name,questions.name_vn
    FROM question_error
    JOIN questions on question_error.questionId = questions.id
    WHERE question_error.userId = $1 AND question_error.testId <= $2
    ORDER BY question_error.id desc
    LIMIT $3
    OFFSET $4 `;
    // Send it to the database.
    var dataErrors = await sails.sendNativeQuery(questionErrorSql, [userId, 0, numberRow, skip]);
    res.json(dataErrors.rows);
  },
  getErrorTest: async function(req,res){
    var userId = req.body.numberRow;
    var numberRow = parseInt(req.body.numberRow);
    var numberPage = parseInt(req.body.numberPage);   
    var skip = numberPage * numberRow;
    var questionErrorSql = `
    SELECT question_error.questionId,question_error.content,question_error.userId,question_error.username,question_error.status,question_error.created,question_error.email,question_error.phone,question_error.note,question_error.os,question_error.userAgent,question_error.categoryId,question_error.topic,question_error.parentTest,question_error.testId,question_error.exercise_number,questions.name,questions.name_vn
    FROM question_error
    JOIN questions on question_error.questionId = questions.id
    WHERE question_error.userId = $1 AND question_error.testId > $2
    ORDER BY question_error.id desc
    LIMIT $3
    OFFSET $4 `;
    // Send it to the database.
    var dataErrors = await sails.sendNativeQuery(questionErrorSql, [userId, 0, numberRow, skip]);
    res.json(dataErrors.rows);
  }
};