const express=require("express")
const app=express();
const authRoute=require("./routes/auth")
const userRoute=require("./routes/user")
const mongoose=require("mongoose");
app.use(express.json());

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/blog').then(console.log("Connected to mongo db")).catch((err)=>console.log(err));

app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);

app.listen("3000",()=>{

  console.log("BACKENED IS RUNNING");

})

