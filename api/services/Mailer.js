module.exports.testEmail = function(obj, toEmail) {
  sails.hooks.email.send(
  "testEmail",
  {
    name: obj.name,
    email: obj.name,
    phone: obj.phone
  },
  {
  to: toEmail,
  subject: "Đăng kí tư vấn"
  }
  ,
  function(err) {console.log(err || "Mail Sent!");}
  )
 }
