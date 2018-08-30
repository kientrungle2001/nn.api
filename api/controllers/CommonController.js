module.exports = {
	// Hiển thị danh sách các môn học
  getSubjects : async function(req,res){
    var showData = await CoreCategories.find({
        'parent': 47,
        'display': 1,
        'status': 1,
        'software': 1,
        'site': [0,1]
    }).sort('ordering asc');
    return res.json(showData);
  },
  // Hiển thị danh sách các đề luyện tập
  getTests : async function(req,res){
  	var categoryId = req.body.categoryId;
  	categoryId = '%,'+categoryId+',%';
    var showData = await EducationTests.find({
        where: {
        	//'practice': 1,
          'software': 1,
	        //'displayAtSite': [0,1],
	        'status': 1,
	        'categoryIds': {like :categoryId }
        },
        sort: 'ordering ASC'

        
    });
    return res.json(showData);
  },
  // Hiển thị danh sách các đề thi thu
  getTestSets : async function(req,res){
  	var categoryId = req.body.categoryId;
  	/*var compability = req.body.compability;
  	var categoryId = 383;
  	var compability =1;*/
  	categoryId = '%,'+categoryId+',%';
    var showData = await EducationTests.find({
        where: {
        	//'compability': compability,
	        'status': 1,
          'software': 1,
          'displayAtSite': [0,1],
	        'classes': {like: '%,5,%'},
	        'categoryIds': {like :categoryId }
        },
        sort: 'ordering ASC',

        
    });
    return res.json(showData);
  },
  // Hiển thi danh sách các đề con, với input là mảng testIds của đề cha
  getTestChilds: async function(req, res){
  	var testParentIds = req.body.test_parent_id;
  	
  	var dataTestChilds = await EducationTests.find({
  		'parent': {in: testParentIds}
  	});
  	res.json(dataTestChilds);
  },
  // Hiển thị đánh giá của người dùng
  getTestimonials : async function(req,res){
  	var categoryId = req.body.categoryId;
  	
    var showData = await CmsNews.find({
        where: {
        	'categoryId': categoryId,
	        'status': 1,
          'software': 1,        
        },
        sort: 'ordering ASC',

        
    });
    return res.json(showData);
  },
  // Tạo danh sách các đề cha
  createTest : async function(req,res){
  	var time= 45;
	var status= 1;
	var ordering= i;
	var classes= ',5,';
	var compability= 1;
	var categoryIds= ',383,';
  	for (var i = 1; i <= 20; i++) {
  		var name= 'Đề số '+i;
  		var name_en= 'Đề số '+i;
  		var name_sn= 'Đề số '+i;
  		await EducationTests.create({
	        'name': name,
	        'name_en': name_en,
	        'name_sn': name_sn,
	        'time': time,
	        'status': status,
	        'ordering': ordering,
	        'classes': classes,
	        'compability': compability,
	        'categoryIds': categoryIds,
          'software': 1,
          'displayAtSite': 1,       
	    });	
  		
  	}
  	
    return res.json(1);
  },
  // Tạo bản ghi nhận tư vấn
  createConsultant: async function(req, res){
  	var name= req.body.name;
  	var phone = req.body.phone;
  	var email= req.body.email;
  	await CmsConsultants.create({
  		'name': name,
  		'email': email,
  		'phone': phone,
  		'status': 1
  	});
  	res.json({
      'success': 1,
      'message': 'Bạn đã đăng ký thành công, chúng tôi sẽ sớm liên hệ lại với bạn!'
    });
  }
};