/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'pages/homepage'
  },
  '/login': {
    view: 'pages/login'
  },
  '/login/userLogin': {
    action: 'Login/userLogin'
  },
  '/register/userRegister': {
    action: 'Register/userRegister'
  },
  /*'/testApi': {
    action: 'TestApi/testApi'
  },*/
  '/testApi': {
    action: 'Subject/getExerciseQuestions'
  },
  '/common/getTests': {
	  action: 'Common/getTests'
  },
  '/common/getTestSets': {
	  action: 'Common/getTestSets'
  },
  '/common/getSubjects': {
	  action: 'Common/getSubjects'
  },
  '/common/getTestimonials': {
	  action: 'Common/getTestimonials'
  },
  // Hàm tạo bản ghi của bảng consultants ( nhận tư vấn)
  '/common/createConsultant':{
    action: 'Common/createConsultant'
  },
  //Lay chi tiết 1 ban ghi trong bảng tests dua vào test ID
  '/test/getTest':{
    action: 'Test/getTest'
  },
  
  //Hàm trả về mảng các câu hỏi và câu trả lời( đề trắc nghiệm ) với input testId
  '/test/getQuestionsAnswers':{
    action: 'Test/getQuestionsAnswers'
  },
  //Hàm trả về mảng các câu hỏi và câu trả lời( đề tự luận ) với input testId
  '/test/getQuestionsAnswersTl':{
    action: 'Test/getQuestionsAnswersTl'
  },
  // Hàm update kết quả bài thi
  '/test/updateUserBooks':{
    action: 'Test/updateUserBooks'
  },
  // Hàm lấy chủ đề của các môn học
  '/subject/getTopics':{
    action: 'Subject/getTopics'
  },
  // Lấy tư vựng các môn
  '/subject/getVocabularies':{
    action: 'Subject/getVocabularies'
  },
  // Lấy danh sách bài tập
  '/subject/getExercises':{
    action: 'Subject/getExercises'
  },
  /// Lấy câu hỏi của bài tập
  '/subject/getExerciseQuestions':{
    action: 'Subject/getExerciseQuestions'
  },
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝



  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
