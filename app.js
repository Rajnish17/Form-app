const express= require("express");
const cors =require("cors");
const app =express();
const allroutes =require("./routes/page.route");
app.use(express.json());
app.use(cors());

app.use("/",allroutes);



module.exports =app;