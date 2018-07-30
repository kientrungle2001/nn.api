
module.exports = {
  userRegister: async function (req, res) {
    /*var txtName= req.body.name;
    var txtUsername= req.body.username;
    var txtEmail= req.body.email;
    var txtPhone= req.body.phone;
    var txtPassword= req.body.password; 
    var txtBirthday= req.body.birthday; 
    var txtSex= req.body.sex;
    var txtAreacode= req.body.areacode; */
    var txtName= 'Xoài';
    var txtUsername= 'benxoai';
    var txtEmail= 'benxoai@gmail.com';
    var txtPhone= '123456789';
    var txtPassword= '123456'; 
    var txtBirthday= '22-11-2015'; 
    var txtSex= 1;
    var txtAreacode= 1; 
    var crypto = require('crypto');
    txtPassword = crypto.createHash('md5').update(txtPassword).digest('hex');
    //txtPassword = crypto.createHash('md5').update(txtPassword).digest('hex');
    //res.json(txtPassword);
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