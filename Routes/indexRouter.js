var express=require("express");
var indexController=require("../controllers/indexController")

var router=express.Router()

router.get("/",indexController.index);
router.get("/detail/:pk",indexController.detail);


module.exports=router;