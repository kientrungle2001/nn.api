module.exports = {
	// Hiển thị danh sách các môn học
  showSubjects : async function(req,res){
    var showData = await CoreCategories.find({
        'parent': 47,
        'display': 1,
        'status': 1
    });
    return res.json(showData);
  },
  // Hiển thị danh sách các đề luyện tập
  showPracticeTests : async function(req,res){
  	var categoryId = req.body.categoryId;
  	categoryId = '%,'+categoryId+'%,';
    var showData = await EducationTests.find({
        where: {
        	'practice': 1,
	        'displayAtSite': 1,
	        'status': 1,
	        'categoryIds': {like :categoryId }
        },
        sort: 'ordering DESC'

        
    });
    return res.json(showData);
  },
  // Hiển thị danh sách các đề thi thu
  showOnlineTests : async function(req,res){
  	var categoryId = req.body.categoryId;
  	categoryId = '%,'+categoryId+'%,';
    var showData = await EducationTests.find({
        where: {
        	'compability': 1,
	        'status': 1,
	        'classes': {like: '%,5,%'},
	        'categoryIds': {like :categoryId }
        },
        sort: 'ordering DESC',

        
    });
    return res.json(showData);
  },
  // Hiển thị danh sách các đề thi chinhs thức vào TĐN các năm
  showTdnTests : async function(req,res){
  	var categoryId = req.body.categoryId;
  	categoryId = '%,'+categoryId+'%,';
    var showData = await EducationTests.find({
        where: {        	
	        'status': 1,	        
	        'categoryIds': {like :categoryId }
        },
        sort: 'ordering DESC'

        
    });
    return res.json(showData);
  }
};