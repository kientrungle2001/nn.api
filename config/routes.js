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
  /*'/testApi': {
    action: 'TestApi/testApi'
  },*/
  '/testApi': {
    action: 'Test/updateUserBooks'
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
  //Lay chi tiết 1 ban ghi trong bảng tests dua vào test ID
  '/getTest':{
    action: 'Test/getTest'
  },
  //Lấy toàn bộ danh sách các câu hỏi của 1 test
  '/getQuestion': {
    action: 'Test/getQuestions'
  },
  // Lấy câu trả lời và đáp án cho 1 câu hỏi
  '/getAnswers':{
    action: 'Test/getAnswers'
  },
  //Hàm trả về mảng các câu hỏi và câu trả lời( đề trắc nghiệm ) với input testId
  '/getQuestionsAnswers':{
    action: 'Test/getQuestionsAnswers'
  },
  //Hàm trả về mảng các câu hỏi và câu trả lời( đề tự luận ) với input testId
  '/getQuestionsAnswersTl':{
    action: 'Test/getQuestionsAnswersTl'
  },
  // Hàm update kết quả bài thi
  '/updateUserBooks':{
    action: 'Test/updateUserBooks'
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
