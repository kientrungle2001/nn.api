//var passport = require('passport'),
    //request = require('request');
module.exports = {
  userLogin: async function (req, res) {
    var txtUsername= req.body.username;
    var txtPassword= req.body.password;
    var crypto = require('crypto');
    var txtPassword = crypto.createHash('md5').update(txtPassword).digest('hex');
    var checkLogin = await CoreUsers.findOne(
      {
        username: txtUsername, password: txtPassword
      }
    );
    if(checkLogin) {
      var encodedUser = new Buffer(JSON.stringify(checkLogin)).toString('base64');
      res.redirect('http://fulllook.vn/login_callback.php?user='+encodedUser);      
    }else res.json("False");   
  },
  loginFacebook:  function(req, res, next) {

      passport.authenticate('facebook', { scope: ['email',
        'manage_pages',
        'pages_manage_instant_articles',
        'pages_show_list',
        'publish_pages',
        'read_insights',
        'read_page_mailboxes'
        ]})(req, res, next);
  },
  
  signup: async function (req, res) {  },

};