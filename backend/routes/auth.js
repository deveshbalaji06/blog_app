const router=require('express').Router();

const User =require('../models/User');

router.post("/register",async(req,res)=>{
    
      try{
    

    const newUser=new User({
       username:req.body.username,
       email:req.body.email,
       password:req.body.password,

    }) 

   const user =await newUser.save();
   res.status(200).json(user);
}
     catch(err)
       {
        res.status(500).json(err);
       }

})

//Login
router.post('/login',async(req,res)=>{
   
  try{

   User.findOne({username:req.body.username }, function (err, docs) {
      if (docs && docs.password==req.body.password){
         res.status(200).json(docs);
      }
      else{
         res.status(500).json("Wrong Credentials");
      }
  })
  }
  catch(err){
   res.status(500).json(err);
  }


})


module.exports= router;