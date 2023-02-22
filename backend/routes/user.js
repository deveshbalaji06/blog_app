
const router=require('express').Router();

const User =require('../models/User');

router.put("/:id",async(req,res)=>{
  
      if(req.body.userId===req.params.id)
      {
        
     if(req.body.password)
     {
        
      try{
        const filter = { _id: req.params.id };
        const update = { username: req.body.username };
        
        
        let doc = await User.findOneAndUpdate(filter, update);
        
        if(doc)
          res.status(200).json(doc);
    
        }
     catch(err)
       {
        res.status(500).json(err);
       }
    }

}

else
{
    res.status(401).json("You can only update your account");
}
}


)
//Delete
router.delete("/:id",async(req,res)=>{
  
    if(req.body.userId===req.params.id)
    {
      
   if(req.body.password)
   {
      
    try{
      const filter = { _id: req.params.id };
      
      
      console.log(filter);
      let doc = await User.findByIdAndDelete(filter);
      
      if(doc)
        res.status(200).json("User Deleted");
  
      }
   catch(err)
     {
      res.status(500).json(err);
     }
  }

}

else
{
  res.status(401).json("You can only update your account");
}
}


)
router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports= router;