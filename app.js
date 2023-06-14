var express=require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var indexRouter=require("./Routes/indexRouter");
var createRouter=require("./Routes/CreateRouter");
var signinRouter=require("./Routes/signinRouter");
var signupRouter=require("./Routes/signupRouter");
var homeRouter=require("./Routes/HomeRouter");
var updateRouter=require("./Routes/UpdateRouter");


var app=express();
app.set("view engine","ejs");

//middlewares are defined here
app.use(express.static("node_modules"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Routers are here
app.use("/",indexRouter);
app.use("/home",homeRouter);
app.use("/create",createRouter);
app.use("/signin",signinRouter);
app.use("/signup",signupRouter);
app.use("/update",updateRouter);


//Don't forget to change the connection string
mongoose.connect("mongodb://127.0.0.1:27017/BlogSearch").then(()=> {app.listen(3000);}).catch(function(){console.log("there is an error!")})
