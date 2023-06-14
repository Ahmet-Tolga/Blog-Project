var express=require("express");
const { index, update } = require("../controllers/UpdateController");
var upload=require("../upload");

var router=express.Router();

router.get("/:pk",index);
router.post("/:pk",upload.single("image"),update);

module.exports=router;
