const queModel = require("../model/question-model")


//add [ POST ]
module.exports.addQue = function (req, res) {

    let queName = req.body.queName
    let option1 = req.body.option1
    let option2 = req.body.option2
    let option3 = req.body.option3
    let option4 = req.body.option4
    let answer = req.body.answer
//encript



    let que = new queModel({
        queName:queName,
        option1:option1,
        option2:option2,
        option3:option3,
        option4:option4,
        answer:answer
    })



    que.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAllQue = function (req, res) {

    queModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "ques", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteQue = function(req,res){
    //params userid 
    let queId = req.params.userId //postman -> userid 

    queModel.deleteOne({_id:queId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "que removed...", data: data, status: 200 })//http status code 
        }
    })
}

