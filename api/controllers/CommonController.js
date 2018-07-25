module.exports = {
	// Hiển thị danh sách các môn học
  getSubjects : async function(req,res){
    var showData = await CoreCategories.find({
        'parent': 47,
        'display': 1,
        'status': 1
    });
    return res.json(showData);
  },
  // Hiển thị danh sách các đề luyện tập
  getTests : async function(req,res){
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
  getTestSets : async function(req,res){
  	var categoryId = req.body.categoryId;
  	var compability = req.body.compability;
  	categoryId = '%,'+categoryId+'%,';
    var showData = await EducationTests.find({
        where: {
        	'compability': compability,
	        'status': 1,
	        'classes': {like: '%,5,%'},
	        'categoryIds': {like :categoryId }
        },
        sort: 'ordering DESC',

        
    });
    return res.json(showData);
  },
  // Hiển thị đánh giá của người dùng
  getTestimonials : async function(req,res){
  	/*var categoryId = req.body.categoryId;
  	var compability = req.body.compability;
  	categoryId = '%,'+categoryId+'%,';*/
    var showData = await EducationTests.find({
        where: {
        	'compability': compability,
	        'status': 1,
	        'classes': {like: '%,5,%'},
	        'categoryIds': {like :categoryId }
        },
        sort: 'ordering DESC',

        
    });
    return res.json(showData);
  },
};