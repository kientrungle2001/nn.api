module.exports = {
	payCard: async function(req, res){
		var md5 = require('md5');
		var userId = req.body.userId;
		var username = req.body.username;
		var pinCard = md5(req.body.pinCard);		
		var dataResult= {
			'string': '',
			'result': 0
		};		
		var checkCard = await EcommercePayCards.findOne({
			'pincard_normal': pinCard
		});
		if(checkCard){
			if(checkCard['status']==1){
				var dateFormat = require('dateformat');
		      	var now = new Date();
		      	var formatNow= dateFormat(now, "yyyy-mm-dd HH:MM:ss");
				if(checkCard['endDate'] == new Date('00 -00 -000')){
					var time = checkCard['time'];
					var date = now.getDate();
					var month = now.getMonth()+1;
					var year = now.getFullYear();				
					var divtime = Math.round(time/365);
					year = year + divtime;
					var modtime = time % 365;
					month = month + Math.round(modtime/30);
					date = date + modtime % 30 ;
					if(date > 30){
						date = date - 30;
						month = month + 1;
					}
					if(month> 12){
						month = month - 12;
						year = year +1;
					}
					var expiredDate = year+ "-"+month+ "-" + date;
					expiredDate = new Date(expiredDate);
					expiredDate= dateFormat(expiredDate, "yyyy-mm-dd HH:MM:ss");
					// update card
					await EcommercePayCards.update({'id':checkCard['id']}).set({
						'activedId': userId,
						'status': 0
					});
					// insert history_payment
					await EcommercePayments.create({
						'username': username,
						'amount': checkCard['price'] ,
						'paymentType': 'paycardfl',
						'paymentStatus': 1,
						'paymentDate': formatNow,
						'status': 1,
						'expiredDate': expiredDate ,
						'serviceType': 'full',
						'cardCode': pinCard,
						'languages': 'ev'
					});
					dataResult.string = 'Bạn đã nạp thẻ thành công';
					dataResult.result =1;
					dataResult.paymentDate = formatNow;
					dataResult.expiredDate = expiredDate;
					
				}else{
					if(dateFormat(checkCard['endDate'], "yyyy-mm-dd HH:MM:ss") >= formatNow){
						// insert history_payment
						await EcommercePayments.create({
							'username': username,
							'amount': checkCard['price'] ,
							'paymentType': 'paycard_promotion',
							'paymentStatus': 1,
							'paymentDate': formatNow,
							'status': 1,
							'expiredDate': checkCard['endDate'] ,
							'serviceType': 'full',
							'cardCode': pinCard,
							'languages': 'ev'
						});
						dataResult.string = 'Bạn đã nạp thẻ thành công';
						dataResult.result =1;
						dataResult.paymentDate = formatNow;
						dataResult.expiredDate = dateFormat(checkCard['endDate'], "yyyy-mm-dd HH:MM:ss");
					}else dataResult.string ='Thẻ đã hết hạn sử dụng';

				}
			}else{
				if(checkCard['activedId'] == userId){
					dataResult.string = 'Bạn đã nạp thẻ thành công, vui lòng không nạp lại nhiều lần';
										
				}else dataResult.string ='Thẻ đã được sử dụng';
			}
		}else dataResult.string ='Mã thẻ không đúng'; 

		res.json(dataResult);	
		
	},
	orderCard: async function(req, res){
		var quantity = req.body.quantity;		
		var fullname = req.body.fullname;
		var address = req.body.address;
		var phone = req.body.phone;
		var amount = req.body.amount;
		var dateFormat = require('dateformat');
      	var now = new Date();
      	var date= dateFormat(now, "yyyy-mm-dd HH:MM:ss");		
		await EcommerceOrderCards.create({
			'quantity': quantity,
			'date':date,
			'fullname':fullname,
			'address':address ,
			'phone':phone,
			'amount':amount,
			'status': 1,
			'software': 1,
		});
		res.json('Bạn đã đặt thẻ thành công! Chúng tôi sẽ sớm liên hệ với bạn.');
	},
};