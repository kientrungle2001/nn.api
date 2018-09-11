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
  '/login/fbGLogin': {
    action: 'Login/FbGLogin'
  },
  '/login/userLogin': {
    action: 'Login/userLogin'
  },
  '/register/userRegister': {
    action: 'Register/userRegister'
  },
  '/register/getAreaCode': {
    action: 'Register/getAreaCode'
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
  // Hàm lấy vị trí xếp hạng của bài thi
  '/test/getRating': {
     action: 'Test/getRating'
  },
  // Ham tra ve update user_book_rating
  '/test/findOrCreateNew': {
    action: 'Test/findOrCreateNew'
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
  '/profile/getUser':{
    action:  'Profile/getUser'
  },
  // Sửa thông tin của hs
  '/profile/editUser':{
    action:  'Profile/editUser'
  },
  // Đổi mật khẩu
  '/profile/editPassword':{
    action:  'Profile/editPassword'
  },
  // Đổi avata
  '/profile/editAvatar':{
    action:  'Profile/editAvatar'
  },
  // Lấy các bài luyện tập
  '/history/countLessons':{
    action:  'History/countLessons'
  },
  // Đếm các bài luyện tập
  '/history/getLessons':{
    action:  'History/getLessons'
  },
  // Lấy các đề luyện tập hoặc đề thi
  '/history/getTests':{
    action:  'History/getTests'
  },
  // Đếm các đề luyện tập hoặc đề thi
  '/history/countTests':{
    action:  'History/countTests'
  },
  // Lấy tất cả các đề thi
  '/history/getTestAlls':{
    action:  'History/getTestAlls'
  },
  // Đếm tất cả các đề thi
  '/history/countTestAlls':{
    action:  'History/countTestAlls'
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
  },
  // Lấy danh sách các bài viết ( tin tức)
  '/news/getNews': {
    action: 'News/getNews'
  },
  // Lấy danh sách các bài viết ( tin tức)
  '/news/getGifts': {
    action: 'News/getGifts'
  },
  // Lấy các Documents
  '/document/getDocuments': {
    action: 'Document/getDocuments'
  },
  // Lấy danh sách câu hỏi trong mục HỎi đáp Aqs
  '/aqs/getQuestions': {
    action: 'Aqs/getQuestions'
  },
  // Đếm số câu hỏi
  '/aqs/countQuestions': {
    action: 'Aqs/countQuestions'
  },
  // Lấy danh sách câu trả lời trong mục HỎi đáp Aqs
  '/aqs/getQuestionAswers': {
    action: 'Aqs/getQuestionAswers'
  },
  // Đếm số câu trả lời
  '/aqs/countQuestionAswers': {
    action: 'Aqs/countQuestionAswers'
  },
  // Tao câu hỏi
  '/aqs/createQuestions': {
    action: 'Aqs/createQuestions'
  },
  // Tao câu trả lời
  '/aqs/createQuestionAnswers': {
    action: 'Aqs/createQuestionAnswers'
  },
  // Nap the
  '/payment/payCard': {
    action: 'Payment/payCard'
  },
  
  // Đặt thẻ
  '/payment/orderCard': {
    action: 'Payment/orderCard'
  },
  // Lấy Game Type
  '/game/getType':{
    action: 'Game/getType'
  },
  // Lấy Game Topic
  '/game/getTopic':{
    action: 'Game/getTopic'
  },
  // Lấy Điểm Game
  '/game/getScores':{
    action: 'Game/getScores'
  },
  // Insert gamescore & và trả về vị trí xếp hạng
  '/game/gameSave':{
    action: 'Game/gameSave'
  },
  //saveGameVocabunary
  '/game/saveGameVocabunary':{
    action: 'Game/saveGameVocabunary'
  },
  // Lấy bảng xếp hạng đề thi
  '/rating/getRating':{
    action: 'Rating/getRating'
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
