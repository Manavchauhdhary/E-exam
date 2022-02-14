const express=require('express')
const app = express()
const sessoncontroler=require("./controller/session-controller")


app.get("/",function(req,res){
    res.write('welcome.')
    res.end()
})

//app.get("/login",function(req,res){
    //res.write("login")
  //  res.end()
//})
//app.get("/signup",function(req,res){
    //res.sendFile("./views/signup.html")
  //  res.end()
//})

  app.get("/login",sessoncontroler.login)
  app.get("/signup",sessoncontroler.signup)

  

app.listen(3000,function(){
    console.log("server started on 3000")
})