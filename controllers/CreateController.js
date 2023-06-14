var blogmodel=require("../Models/BlogModel");
var usermodel=require("../Models/UserModel");
var fs=require("fs");
var path=require("path");
var user_id1="";

module.exports.index=async function(req,res){
    var user=await usermodel.findById(req.params.pk);
    user_id1=req.params.pk;
    console.log(user_id1);
    if(user){
        res.render("create",{"control":false,"user":req.params.pk});
    }
}
module.exports.create=function(req,res){
    var img={
        //you have to determine that where your file is uploaded so change this string...
        data:fs.readFileSync(path.join("C:/Users/TOLGAHAN/Desktop/web Çalışmaları/nodejs_course/uploads/"+req.file.filename)),
        contentType:"image/png"
    };
    var title=req.body.title;
    var description=req.body.description;
    var user_id=user_id1;
    var new_model=new blogmodel({title:title,description:description,img:img,user_id:user_id});
    new_model.save()
    res.redirect("/home/"+user_id);
}