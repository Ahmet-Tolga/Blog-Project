var blogmodel=require("../Models/BlogModel");
var usermodel=require("../Models/UserModel");
module.exports.index=async function(req,res){
    res.render("index",{"blogs":await blogmodel.find({}),"control":true,"user":false});
}

module.exports.detail=async function(req,res){
    var id=req.params.pk;
    var blog=await blogmodel.findById(id);
    var user=await usermodel.findById(blog.user_id);
    res.render("detail",{"blog":blog,"user":user});
}