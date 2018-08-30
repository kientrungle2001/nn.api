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
};