const express=require("express")
const mongoose=require("mongoose")
const sessonController=require("./controller/session-controller")
const roleController=require("./controller/role-controller")
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



  app.get("/login",sessonController.login)
  app.get("/signup",sessonController.signup)
  app.post("/saveUser",sessonController.saveUsers)
  
//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

app.listen(3000,function(){
    console.log("server started on 3000")
})