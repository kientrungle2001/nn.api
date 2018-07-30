
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
    var txtAreacode= req.body.areacode; 
    var dateUpdate = await CoreUsers.update({id: txtUserId}).set({
      'name': txtName,      
      'email': txtEmail,
      'phone': txtPhone,
      'address': txtAddress,
      'birthday': txtBirthday,
      'sex': txtSex,
      'areacode': txtAreacode,
    });
    res.json(1);
  },
  editPassword: async function(req, res){
    var txtUserId= req.body.userId;
    var txtOldPassword= req.body.oldPassword;
    var txtNewPassword= req.body.newPassword;
  },
  editAvatar: async function(req, res){},
  getLessons: async function(req, res){},
  getTests: async function(req, res){},
  getDetailLesson: async function(req, res){},
  getDetailTest: async function(req, res){},
  signup: async function (req, res) {  },

};