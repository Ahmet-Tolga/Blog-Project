var usermodel=require("../Models/UserModel");
var blogmodel=require("../Models/BlogModel");
var user_id="";
module.exports.home=async function(req,res){
    var id=req.params.pk;
    user_id=req.params.pk;
    var user=await usermodel.findById(id);
    var blogs=await blogmodel.find({});
    if(user){
        res.render("index",{"blogs":blogs,"control":false,"user":user});
    }
}
module.exports.erase=function(req,res){
    blogmodel.findByIdAndDelete(req.params.pk).then(function(){
        res.redirect("/home/"+user_id);
    })
}