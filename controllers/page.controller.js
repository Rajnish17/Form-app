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
        password:req.body.password

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
