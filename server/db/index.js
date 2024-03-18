const mongoose=require('mongoose');

//mongoose schema
const userSchema=new mongoose.Schema({
  firstName:String,
  lastName:String,
  email:String,
  password:String,
  purchasedCourses:[{type:mongoose.Schema.Types.ObjectId,ref:'Course'}]
})

const adminSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName:String,
  lastName:String
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean
});

//mongoose model

const User=mongoose.model("User",userSchema);
const Admin= mongoose.model("Admin",adminSchema);
const Course=mongoose.model("Course",courseSchema);



module.exports={User,Admin,Course};