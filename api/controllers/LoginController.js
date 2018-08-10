
module.exports = {
  userLogin: async function (req, res) {
    var txtUsername= req.body.username;
    var txtPassword= req.body.password;  
    var url= req.body.url;    
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
      var checkPayment = await EcommercePayments.find({
         where: {
          username: txtUsername,
         paymentDate: {'<=': formatNow},
         expiredDate: {'>=': formatNow},
         software: 1,
         site: [0, 1],        
       },
       sort: 'id DESC',
      limit: 1
      });
      if(checkPayment){
        checkPayment = checkPayment[0];
         var userPayment = 1;
         var paymentDate = dateFormat(checkPayment['paymentDate'], "dd-mm-yyyy");
         var expiredDate = dateFormat(checkPayment['expiredDate'], "dd-mm-yyyy");
      }else{
          var userPayment = 0;
          var paymentDate= '';
          var expiredDate= '';
      } 
      var dataUser= {
        'userId':checkLogin['id'],
        'username': checkLogin['username'],
        'name': checkLogin['name'],
        'checkPayment': userPayment,
        'paymentDate': paymentDate,
        'expiredDate': expiredDate
      };   
      
      var encodedUser = new Buffer(JSON.stringify(dataUser)).toString('base64');
      res.redirect(url+'/login_callback.php?user='+encodedUser); 

    }else res.json("False");   
  },
  signup: async function (req, res) {  },

};