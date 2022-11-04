const express= require("express");
const cors =require("cors");
const app =express();
// const { savedata,getdata } = require("./controllers/page.controller");
const allroutes =require("./routes/page.route");
app.use(express.json());
app.use(cors());
app.use("/login",allroutes);
app.use("/find",allroutes);



module.exports =app;