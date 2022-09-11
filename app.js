const express= require("express");
const cors =require("cors");
const app =express();
const { savedata,getdata } = require("./controllers/page.controller");
app.use(express.json());
app.use(cors());
app.use("/login",savedata);
app.use("/find",getdata);



module.exports =app;