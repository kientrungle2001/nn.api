module.exports = {
	
	payCard: async function(req, res){		
		var md5 = require('md5');
		var userId = req.body.userId;
		var username = req.body.username;		
		var pinCard = md5(req.body.pincard);	
		var software = req.body.software || 1;
    	var site = req.body.site || 1;
		var dataResult= {
			'string': '',
			'result': 0,
			'paymentDate': '00-00-000 00:00:00',
			'expiredDate': '00-00-000 00:00:00'
		};

		var checkCard = await EcommercePayCards.find({
			where: {
				'pincard': pinCard,
				'software': software,
				'site': [0, site],
			},
			limit: 1
		});
		var dateFormat = require('dateformat');
		if(checkCard[0]){
			checkCard = checkCard[0];
			if(checkCard['status'] == 1){
				// The chua nap
				var now = new Date();
		      	var formatNow= dateFormat(now, "yyyy-mm-dd 00:00:00");
		      	
				if(checkCard['endDate'] == '0000-00-00 00:00:00'){
					if((checkCard['expiredDate'] == '0000-00-00 00:00:00') || (dateFormat(checkCard['expiredDate'],"yyyy-mm-dd 23:59:59") >= formatNow)){
						// the van con han su dung
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
						expiredDate= dateFormat(expiredDate, "yyyy-mm-dd 23:59:59");					
						// update card
						if(checkCard['promotion'] == 1){
							var quantity = checkCard['quantity'] - 1;
							await EcommercePayCards.update({'id':checkCard['id']}).set({
								'quantity': quantity							
							});
						}else{
							await EcommercePayCards.update({'id':checkCard['id']}).set({
								'activedId': userId,
								'status': 0
							});
						}					
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
							'languages': 'ev',
							'software': software,
							'site': site,
						});
						dataResult.string = 'Bạn đã nạp thẻ thành công';
						dataResult.result =1;
						dataResult.paymentDate = formatNow;
						dataResult.expiredDate = expiredDate;
					}else{
						// the đã hết hạn sử dụng
						dataResult.string = 'Thẻ đã hết hạn sử dụng';
					}
					
					
				}else{
					//Thẻ nạp khuyến mại
					var endDate = checkCard['endDate'];
					endDate =dateFormat(endDate, "yyyy-mm-dd 23:59:59");
					if(endDate >= formatNow){
						// insert history_payment
						await EcommercePayments.create({
							'username': username,
							'amount': checkCard['price'] ,
							'paymentType': 'paycard_promotion',
							'paymentStatus': 1,
							'paymentDate': formatNow,
							'status': 1,
							'expiredDate': endDate ,
							'serviceType': 'full',
							'cardCode': pinCard,
							'languages': 'ev',
							'software': software,
							'site': site,
						});
						var quantity = checkCard['quantity'] - 1;
						await EcommercePayCards.update({'id':checkCard['id']}).set({
							'quantity': quantity							
						});
						dataResult.string = 'Bạn đã nạp thẻ thành công';
						dataResult.result =1;
						dataResult.paymentDate = formatNow;
						dataResult.expiredDate = dateFormat(endDate, "yyyy-mm-dd HH:MM:ss");
					}else dataResult.string ='Thẻ đã hết hạn sử dụng';					
				}
			}else{
				// the da duoc su dung
				if(userId == checkCard['activedId']){
					dataResult.string ='Bạn đã nạp thẻ thành công,vui lòng không click nạp thẻ nhiều lần!';
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
			'software': software,
		});
		res.json(1);
	},
};