var blog_model = require("../Models/BlogModel");
var fs=require("fs");
var path=require("path");

module.exports.index = async function (req, res) {
    var blog = await blog_model.findById(req.params.pk);
    res.render("update", { "blog": blog });
}
module.exports.update =function (req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var id=req.params.pk;
    var user_id="";
    blog_model.findById(id).then(function(data){
        user_id=data.user_id;
    })
    blog_model.findByIdAndUpdate(id,{title:title,description:description}).then(function(){
        res.redirect("/home/"+user_id);
    })
}