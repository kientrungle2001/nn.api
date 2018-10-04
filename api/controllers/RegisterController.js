
module.exports = {
  userRegister: async function (req, res) {
    var url= req.body.url;
    var txtName= req.body.name;
    var txtUsername= req.body.username;
    var txtEmail= req.body.email;
    var txtPhone= req.body.phone;
    var txtPassword= req.body.password; 
    var txtBirthday= req.body.birthday; 
    var txtSex= req.body.sex;
    var txtAreacode= req.body.areacode; 
    var txtCoupon= req.body.coupon;
    var software = req.body.software || 1;
    var site = req.body.site || 1;
    var md5 = require('md5');
    txtPassword = md5(txtPassword);
    var checkLogin = await CoreUsers.find({
      where: {username: txtUsername},
      limit: 1
    });
    var result= {
      error: 1,
      success: 0,
      message: ''
    };
    if(checkLogin[0]) {
      result.message= 'Tên đăng nhập đã được sử dụng';
      res.json(result);           
    }else{
      if(txtCoupon){
        var checkCoupon = await CoreCoupons.find({
          where: {
            code: txtCoupon,
            software: software,
            site: site
          },
          limit: 1
        });
        if(checkCoupon[0]){          
          var reseller = checkCoupon[0];
          var resellerId = reseller['resellerId'];
          var coupon = reseller['code'];
        }
      }else {        
          var resellerId = 0;
          var coupon = '';
      }
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
        'lastlogined': jsonDate,
        'resellerId': resellerId,
        'coupon': coupon
      }).fetch();
      var dataUser= {
        'userId':createUser['id'],
        'username': createUser['username'],
        'name': createUser['name'],
        'phone': createUser['phone'],
          'email': createUser['email'],
        'checkPayment': 0,
        'paymentDate': '',
        'expiredDate': ''
      };
      var encodedUser = new Buffer(JSON.stringify(dataUser)).toString('base64');
      //res.redirect(url+'/login_callback.php?user='+encodedUser); 
      result.success = 1;
      result.error= 0;
      result.message= 'Đăng ký thành công';
      result.url= url+'/login_callback.php?user='+encodedUser;
    } 
    res.json(result);   
  },
  getAreaCode: async function(req, res){
    var dataArea = await CoreAreaCode.find({
        where: {
          type: 'province',
          status: 1
        },
        select:['id', 'name']
    });
    res.json(dataArea);
  },
  signup: async function (req, res) {  },

};