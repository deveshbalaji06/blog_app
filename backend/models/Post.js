import mongoose from 'mongoose';
const { Schema } = mongoose;

const PostSchema =new Schema(
      {
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:""
    },
    username:{
        type:String,
        required:true

    },
    catrgories:{
        type:Array,
        required:true
    }


},{timestamps:true});


module.exports=db.model('Post',PostSchema);