import mongoose from 'mongoose';
const { Schema } = mongoose;

const PostSchema =new Schema(
      {
    name:{
        type:String,
        required:true,
        
    },

},{timestamps:true});


module.exports=db.model('Post',PostSchema);