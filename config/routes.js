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
  // Lấy câu hỏi của bài tập
  '/subject/getExerciseQuestions':{
    action: 'Subject/getExerciseQuestions'
  },
  // Lấy câu hỏi của bài tập Quan Sat
  '/subject/getAllExerciseQuestions':{
    action: 'Subject/getAllExerciseQuestions'
  },
  // Update kết quả bài làm của hs
  '/subject/updateUserBooks':{
    action: 'Subject/updateUserBooks'
  },
  // Hien thi lich su hoc tap cua hs
  // Lay thông tin của hs
  '/history/getUser':{
    action:  'History/getUser'
  },
  // Sửa thông tin của hs
  '/history/editUser':{
    action:  'History/editUser'
  },
  // Đổi mật khẩu
  '/history/editPassword':{
    action:  'History/editPassword'
  },
  // Đổi avata
  '/history/editAvatar':{
    action:  'History/editAvatar'
  },
  // Lấy các bài luyện tập
  '/history/getLessons':{
    action:  'History/getLessons'
  },
  // Lấy các đề luyện tập hoặc đề thi
  '/history/getTests':{
    action:  'History/getTests'
  },
  // Lấy chi tiết của 1 bài tập
  '/history/getDetailLesson':{
    action:  'History/getDetailLesson'
  },
  // Lấy chi tiết của 1 đề thi
  '/history/getDetailTest':{
    action:  'History/getDetailTest'
  },
  // Lấy chi tiết câu hỏi và câu trả lời của 1 bài 
  '/history/getQuestionAnswers': {
    action: 'History/getQuestionAnswers'
  }
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
