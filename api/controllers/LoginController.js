
module.exports = {
  userLogin: async function (req, res) {
    var txtUsername= req.body.username;
    var txtPassword= req.body.password;    
    var md5 = require('md5');
    txtPassword = md5(txtPassword);
    
    var checkLogin = await CoreUsers.findOne(
      {
        username: txtUsername, password: txtPassword
      }
    );
    if(checkLogin) {
      //check payment
      var dateFormat = require('dateformat');
      var now = new Date();
      var formatNow= dateFormat(now, "yyyy-mm-dd HH:MM:ss");
      var datePayment = await EcommercePayments.findOne({
         username: txtUsername,
         paymentDate: {'<=': formatNow},
         expiredDate: {'>=': formatNow},
         software: 1,
         site: [0, 1],
      });
      if(datePayment){
         var userPayment = 1;
      }else var userPayment = 0;
      checkLogin.payment = userPayment;
      checkLogin.paymentDate =dateFormat(datePayment['paymentDate'], "yyyy-mm-dd HH:MM:ss"); 
      checkLogin.expiredDate =dateFormat(datePayment['expiredDate'], "yyyy-mm-dd HH:MM:ss"); 
      
      var encodedUser = new Buffer(JSON.stringify(checkLogin)).toString('base64');
      res.redirect('http://fulllook.vn/login_callback.php?user='+encodedUser); 

    }else res.json("False");   
  },
  signup: async function (req, res) {  },

};