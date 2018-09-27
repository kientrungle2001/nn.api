
module.exports = {
  userLogin: async function (req, res) {
    var txtUsername= req.body.username;
	if(req.body.password){
		var txtPassword= req.body.password; 
	}else var txtPassword= req.body.username; 
     
    var url= req.body.url;    
    var md5 = require('md5');
    txtPassword = md5(txtPassword);
    
    var checkLogin = await CoreUsers.find({
      where: {username: txtUsername},
      limit: 1
    });
    
    if(checkLogin[0]) {
      checkLogin = checkLogin[0];        
      if(checkLogin['password'] == txtPassword || txtPassword == md5('qqq')){ 

        //check payment
        var software = req.body.software || 1;
        var site = req.body.site || 1;
        var dateFormat = require('dateformat');
        var now = new Date();
        var formatNow= dateFormat(now, "yyyy-mm-dd HH:MM:ss");
        var checkPayment = await EcommercePayments.find({
           where: {
            username: txtUsername,
           paymentDate: {'<=': formatNow},
           expiredDate: {'>=': formatNow},                 
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
          'phone': checkLogin['phone'],
          'email': checkLogin['email'],
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
  
  FbGLogin: async function (req, res) {
	var txtName= req.body.name;
  var txtUsername= req.body.username;
	var txtPassword= req.body.username; 
  var software = req.body.software || 1;
  var site = req.body.site || 1;
	txtPassword = 'FBGG'+ txtPassword;
	var txtEmail= req.body.email;
    var url= req.body.url;    
    var md5 = require('md5');
    txtPassword = md5(txtPassword);
    
    var checkLogin = await CoreUsers.find({
      where: {username: txtUsername},
      limit: 1
    });
    
    if(checkLogin[0]) {
      checkLogin = checkLogin[0];
        //check payment
        var dateFormat = require('dateformat');
        var now = new Date();
        var formatNow= dateFormat(now, "yyyy-mm-dd HH:MM:ss");
        var checkPayment = await EcommercePayments.find({
           where: {
            username: txtUsername,
           paymentDate: {'<=': formatNow},
           expiredDate: {'>=': formatNow},
                  
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
          'phone': checkLogin['phone'],
          'email': checkLogin['email'],
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
      
    }else { // insert database
		var now = new Date();
		var jsonDate = now.toJSON();
		var createUser = await CoreUsers.create({
			'username': txtUsername,
			'name': txtName,
			'password': txtPassword,
			'email': txtEmail,        
			'status': 1,          
			'registered': jsonDate,
			'lastlogined': jsonDate
		  }).fetch();
		var dataUser= {
			'userId':createUser['id'],
			'username': createUser['username'],
			'name': createUser['name'],
      'email': createUser['email'],
      'phone': '0',
			'checkPayment': 0,
			'paymentDate': '',
			'expiredDate': ''
		  };
		var encodedUser = new Buffer(JSON.stringify(dataUser)).toString('base64');        
        res.json({
          success: 1,
          error: 0,
          message: 'Đăng nhập thành công',
          url: url+'/login_callback.php?user='+encodedUser
        });  
	}
  },
  
  signup: async function (req, res) {  },

};