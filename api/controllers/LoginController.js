
module.exports = {
  userLogin: async function (req, res) {
    var txtUsername= req.body.username;
    var txtPassword= req.body.password;  
    var url= req.body.url;    
    var md5 = require('md5');
    txtPassword = md5(txtPassword);
    
    var checkLogin = await CoreUsers.find({
      where: {username: txtUsername},
      limit: 1
    });
    
    if(checkLogin[0]) {
      checkLogin = checkLogin[0];        
      if(checkLogin['password'] == txtPassword){ 

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
        if(checkPayment[0]){
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
        // res.redirect(url+'/login_callback.php?user='+encodedUser);
        res.json({
          success: 1,
          error: 0,
          message: 'Đăng nhập thành công',
          url: url+'/login_callback.php?user='+encodedUser
        });
      }else res.json({
            success: 0,
            error: 1,
            message: 'Mật khẩu chưa đúng'
          });   

    }else res.json({
        success: 0,
        error: 1,
        message: 'Tên đăng nhập chưa đúng'
      });   
  },
  signup: async function (req, res) {  },

};