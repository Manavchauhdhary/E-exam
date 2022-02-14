const fs=require('fs')

function login(req,res){
    res.write('welcom...')
    res.end()
}

function signup(req,res){
    let signupHtml=fs.readFileSync("./views/signup.html")
    res.write(signupHtml)
    res.end()
}
module.exports.login=login
module.exports.signup=signup