var express=require("express");
const { index, signin } = require("../controllers/signinController");

var router=express.Router()

router.get("/",index);
router.post("/",signin);

module.exports=router;