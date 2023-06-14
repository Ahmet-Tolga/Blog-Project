var usermodel=require("../Models/UserModel");
module.exports.index=function(req,res){
    res.render("signin",{"message":""});
}
module.exports.signin=function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    usermodel.find({username:username,password:password}).then(function(data){
        console.log(data);
        res.redirect("/home/"+data[0].id);
    }).catch(function(){res.render("signin",{"message":"There is no user like this!"})});
}