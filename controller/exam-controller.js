const examModel=require("../model/exam-model")


module.exports.addExam = function (req, res) {

    let examName = req.body.examName
    let totalQuestion = req.body.totalQuestion
    let isActive = req.body.isActive
    let course = req.body.course


    let exam = new examModel({
        examName: examName,
        totalQuestion: totalQuestion,
        isActive: isActive,
        course: course
    })



    exam.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "exam done", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAllExam = function (req, res) {

    examModel.find().populate("course").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "exam...", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteExam = function(req,res){
    //params userid 
    let examId = req.params.examId //postman -> userid 

    examModel.deleteOne({_id:examId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "exam removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateExam = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let examId = req.body.courseId 
    let examName = req.body.courseName 

    examModel.updateOne({_id:examId},{examName:courseName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}