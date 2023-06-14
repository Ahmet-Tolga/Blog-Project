var express=require("express");
const { index, signup } = require("../controllers/signupController");

var router=express.Router()

router.get("/",index);
router.post("/",signup);

module.exports=router;