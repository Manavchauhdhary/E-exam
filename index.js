const express=require("express")
const mongoose=require("mongoose")
const sessoncontroller=require("./controller/session-controller")
const rolecontroller=require("./controller/role-controller")
const app = express()

//middale ware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//database
mongoose.connect('mongodb://localhost:27017/ecom',function(err){
  if(err){
    console.log("db connecton fail......");
    console.log(err);

  }else{
    console.log("db connected");
  }
})


app.get("/",function(req,res){
    res.write('welcome.')
    res.end()
})



  app.get("/login",sessoncontroller.login)
  app.get("/signup",sessoncontroller.signup)
  app.post("/saveUser",sessoncontroller.saveUsers)
  
//role
app.post("/roles",rolecontroller.addRole)

app.listen(3000,function(){
    console.log("server started on 3000")
})