const User = require("../models/User");

const getdata = (req, res) => {
  User.find()
    .then((data) => {
      res.json({
        message: "Success",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
const savedata = (req, res) => {
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        city:req.body.city,
        phone:req.body.phone,
        question:req.body.question,
        insta:req.body.insta,

    });

    user.save().then(result=>{

        res.json({
            message:"Success",
            data:result
        })

    }).catch(err=>{
        console.log(err);

    });
    
  };
  

module.exports = {
  getdata,
  savedata
};
