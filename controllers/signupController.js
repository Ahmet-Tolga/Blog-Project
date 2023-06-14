var usermodel=require("../Models/UserModel");
module.exports.index=function(req,res){
    res.render("signup",{"message":""});
}
module.exports.signup=function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    var password_again=req.body.password_again;
    if(password==password_again){
        const new_user=new usermodel({username:username,password:password});
        new_user.save();
        res.redirect("/signin");
    }
    else{
        var message="Password matching Error!";
        res.render("signup",{"message":message});
    }
}