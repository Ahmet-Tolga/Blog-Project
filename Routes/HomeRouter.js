var express=require("express");
const { home, erase } = require("../controllers/HomeController");

var router=express.Router()

router.get("/:pk",home)
router.get("/delete/:pk",erase);

module.exports=router;
