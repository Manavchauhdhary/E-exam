const req = require("express/lib/request")
const resultModel=require("../model/result-model")

module.exports.addresult=function(req,res){

    let course=req.body.course
    let exam=req.body.exam
    let user=req.body.user
    let marks=req.body.marks
    let attendQue=req.body.attendQue
    let examDate=req.body.examDate

    let result=new resultModel({

        course:course,
        exam:exam,
        user:user,
        marks:marks,
        attendQue:attendQue,
        examDate:examDate
    })

    result.save(function(err,data) {
       if(err){
           req.json({ msg: "SMW", data: err, status: -1 })
       }
       else {
        res.json({ msg: "result of student", data: data, status: 200 })//http status code 
    }
  })
}



module.exports.getallresult=function(req,res){
    
    resultModel.find(function(err,res){
    if(err){
        req.json({msg:"smw",data:err,status:-1})
    }
    else{
        req.json({msg:"all data of student",data:data,status:200})
    }

    })
}
module.exports.listOneResult = function(req,res){
    let resultId = req.params.resultId
    resultModel.findById(resultId).populate('exam').populate('user').exec(function(err,data){
        if(err){
            res.json({msg:"SWW",status:-1,data:req.body})
        }
        else{
            res.json({msg:"One Result...",status:200,data:data})
        }
    })
}


module.exports.listAllResultsOfUser = function(req,res){
    let userId = req.params.userId
    resultModel.find({user:userId}).populate({path:'exam',populate:{path:'course',model:'course'}}).populate({path:'user',populate:{path:'role',model:"role"}}).exec(function(err,data){
        if(err){
            res.json({msg:"Something Went Wrong!",status:-1,data:err})
        }
        else{
            res.json({msg:"All Results of a User...",status:200,data:data})
        }
    }) 
}


module.exports.deleteresult = function(req,res){
    //params userid 
    let resultId = req.params.resultId //postman -> userid 

    resultModel.deleteOne({_id:resultId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}