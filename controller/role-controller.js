module.exports.addRole=function(req,res){
    //db inseert role
    console.log(req.boy.roleName);
    res.json({msg:"role add",status:200})
}

//roleName