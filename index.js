const express=require("express")
const mongoose=require("mongoose")
var cors = require('cors')
const sessonController=require("./controller/session-controller")
const roleController=require("./controller/role-controller")
const userController = require("./controller/user-controller")
const courseController=require("./controller/course-controller")
const queController=require("./controller/question-controller")
const examController=require("./controller/exam-controller")
const resultController=require("./controller/result-controller")
const answerController=require("./controller/answer-controller")


const app = express()
app.use(cors())
//middale ware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//database
mongoose.connect('mongodb://localhost:27017/E-exam',function(err){
  if(err){
    console.log("db connection  fail......");
    console.log(err);

  }else{
    console.log("db connected");
  }
})


app.get("/",function(req,res){
    res.write('welcome.')
    res.end()
})

//forget password
 app.post("/forgetpassword",sessonController.mailLinkToResetPassword)
 app.post('/reset',sessonController.resetPassword)


  app.get("/login",sessonController.login)
  app.get("/signup",sessonController.signup)
  app.post("/saveUser",sessonController.saveUsers)
  
//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)


//user 
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)
app.get("/users/:userId",userController.getOneUser)
app.post("/login",userController.login)

//answers
app.post('/answers',answerController.addAnswer)
app.get('/answers',answerController.listAllAnswer)
app.get('/answers/:answerId',answerController.listOneAnswer)

//course
app.post("/courses",courseController.addCourse)
app.get("/courses",courseController.getAllCourse)
app.get('/courses/:courseId',courseController.listOneCourse)
app.delete("/courses/:courseId",courseController.deleteCourse)
app.put("/courses",courseController.updateCourse)
app.put('/courses/:courseId',courseController.updateCourse)
app.get('/courses/:courseId/exams',examController.listAllExamsOfSubject)


//que
app.get('/exams/:examId/questions/:questionId',queController.listOneQuestion)
app.post("/ques/:examId/questions",queController.addQuestiontoExam)
app.get("/ques/:examId/questions",queController.listAllQuestionsOfExam)
app.delete("/ques/:examId/questions/:queId",queController.deleteQue)
app.put("/ques/:examId/questions/:queId",queController.updateQue)




//exam
app.post("/exams",examController.addExam)
app.get("/exams",examController.getAllExam)
app.get("/exams/:examId",examController.listoneExam)
app.delete("/exams/:examId",examController.deleteExam)
app.put("/exams",examController.updateExam)
app.put("/exams/:examId",examController.updateoneExam)

//result
app.post("/results",resultController.addresult)
app.get("/results",resultController.getallresult)
// app.get('/result/:resultId',resultController.listOneResult)
app.delete("/results",resultController.deleteresult)
app.get('/results/:userId',resultController.listAllResultsOfUser)





app.listen(3000,function(){
    console.log("server started on 3000")
})