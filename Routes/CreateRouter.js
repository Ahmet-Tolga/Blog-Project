var express=require("express");
var path=require("path");
const { index, create } = require("../Controllers/CreateController");
var upload=require("../upload");

var router=express.Router()

router.get("/:pk",index);
router.post("/",upload.single("image"),create);

module.exports=router;