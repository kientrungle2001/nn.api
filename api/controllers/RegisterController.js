
module.exports = {
  userRegister: async function (req, res) {
    var txtName= req.body.name;
    var txtUsername= req.body.username;
    var txtEmail= req.body.email;
    var txtPhone= req.body.phone;
    var txtPassword= req.body.password; 
    var txtBirthday= req.body.birthday; 
    var txtSex= req.body.sex;
    var txtAreacode= req.body.areacode; 
    var md5 = require('md5');
    txtPassword = md5(txtPassword);
    var checkLogin = await CoreUsers.findOne({username: txtUsername});
    if(checkLogin) {
      res.json("Tên đăng nhập đã được sử dụng");           
    }else{
      var now = new Date();
      var jsonDate = now.toJSON();
      var createUser= await CoreUsers.create({
        'username': txtUsername,
        'name': txtName,
        'password': txtPassword,
        'email': txtEmail,
        'birthday': txtBirthday,
        'phone': txtPhone,
        'status': 1,
        'sex': txtSex,
        'areacode': txtAreacode,
        'registered': jsonDate,
        'lastlogined': jsonDate
      }).fetch();
      var encodedUser = new Buffer(JSON.stringify(createUser)).toString('base64');
      //res.redirect('http://fulllook.vn/login_callback.php?user='+encodedUser); 
      res.json('true');
    }    
  },
  signup: async function (req, res) {  },

};