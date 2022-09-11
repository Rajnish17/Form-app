const express =require("express");
const router =express.Router();
const {getdata,savedata} = require("../controllers/page.controller");

router.post("/",savedata);
router.get("/",getdata)


module.exports= router;