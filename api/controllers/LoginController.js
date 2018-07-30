
module.exports = {
  userLogin: async function (req, res) {
    var txtUsername= req.body.username;
    var txtPassword= req.body.password;
    
    var md5 = require('md5');
    var txtPassword = md5(txtPassword);
    var checkLogin = await CoreUsers.findOne(
      {
        username: txtUsername, password: txtPassword
      }
    );
    if(checkLogin) {
      res.json("True");
      var encodedUser = new Buffer(JSON.stringify(checkLogin)).toString('base64');
      res.redirect('http://fulllook.vn/login_callback.php?user='+encodedUser);      
    }else res.json("False");   
  },
  signup: async function (req, res) {  },

};