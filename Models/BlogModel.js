var mongoose=require("mongoose");

var BlogSchema=new mongoose.Schema({
    img:{
        data:Buffer,
        contentType:String
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    user_id:{
        type:String,
        required:true
    }
},{collection:"blog",timestamps:true});

var BlogModel=mongoose.model("blog",BlogSchema)
module.exports=BlogModel;