require('dotenv').config();
const express= require("express");
const app =require("./app");
const port =process.env.PORT || 4040;
const mongoose =require("mongoose");


mongoose.connect( process.env.MONGO_URL).then((data) => {
    console.log("connected");
  });


app.listen(port,function(err,data){
    console.log(`server started at ${port}`)
})
