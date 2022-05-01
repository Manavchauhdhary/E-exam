const mongoose=require("mongoose")

const examSchema = new mongoose.Schema({
    examName:{
        type:String,
        require:true
    },
    totalQuestion:{
        type:Number
    },
    isActive:{
        type:Boolean
    },
    course : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"course"
},
    author : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

    // questions:[
    //     {
    //      type:mongoose.Schema.type.ObjectId,
    //      ref:"question"
    //     }
    // ]

})

const examModel = mongoose.model("exam",examSchema)
module.exports = examModel