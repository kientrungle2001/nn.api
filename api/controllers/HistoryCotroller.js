
module.exports = {
  getUser: async function (req, res) {
    var userId= req.body.userId; 
    var username= req.body.username;
    var userPayment = req.body.payment;   
    var getDataUser = await CoreUsers.findOne({id: userId});
    if(getDataUser) {
      //check payment
      if(userPayment == 1){
        var txtUsername = getDataUser['id'];
        var now = new Date();
        var jsonDate = now.toJSON();
        var datePayment = await EcommercePayments.findOne({
             username: txtUsername,
             paymentDate: {'>=': now},
             expiredDate: {'<=': now}         
        });
        getDataUser.paymentDate= datePayment['paymentDate'];
        getDataUser.expiredDate= datePayment['expiredDate'];
        
      } 
      res.json(getDataUser);     
    }else res.json("False");   
  },
  editUser: async function(req, res){

  },
  getLesson: async function(req, res){},
  getTest: async function(req, res){},
  getDetailLesson: async function(req, res){},
  getDetailTest: async function(req, res){},
  signup: async function (req, res) {  },

};