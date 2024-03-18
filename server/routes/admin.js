const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const router = express.Router();
const {Admin,User,Course}=require("../db");
const { secretKey } = require("../middleware/auth")
const { authenticateJwt} = require("../middleware/auth");


router.get('/me',authenticateJwt,(req,res)=>{
  res.send({"email":req.user})
});

router.post('/signup',async (req, res) => {
    // logic to sign up admin
    const {email, password,firstName,lastName}=req.body;
    const admin=await Admin.findOne({email});
    if(admin){
      res.status(403).send({message:"admin already exist"})
    }
    else{
      const newAdmin=new Admin({email, password,firstName,lastName});
      const token=jwt.sign({email,role:"admin"},secretKey,{expiresIn:"1h"});
      await newAdmin.save();
      res.send({message:"admin sign up sucessfully",token});

    }
  });


  
  
  router.post('/signin',async (req, res) => {
    // logic to log in admin
    const {email,password}=req.headers;
    const admin=await Admin.findOne({email});
    if(admin){
      const token=jwt.sign({email,role:"admin"},secretKey,{expiresIn:"1h"});
      res.send({message:"admin logged in sucessfully",token});
    }
    else{
      res.status(404).send({message:"admin not found"})
    }
  });
  
  router.post('/courses',authenticateJwt, async (req, res) => {
    // logic to create a course
    if(req.user.role!="admin"){
      res.status(404).send({message:"admin not found"});
    }
    else{
    // let course={...req.body,"id":COURSES.length+1};
    const newCourse =new Course(req.body);
    await newCourse.save();
    res.send({message:"course added sucessfully",courseID:newCourse.id})
    }
  });


  router.put('/courses/:courseId', authenticateJwt, async (req, res) => {

    try{const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
    if (course) {
      res.json({ message: 'Course updated successfully' });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }}
    catch{
      console.log("error occured");
      res.send();
    }
    
  });
  
  
  router.get('/courses',authenticateJwt, async (req, res) => {
    // logic to get all courses
    if(req.user.role!="admin"){
      res.status(404).send({message:"admin not found"});
    }
    else{
    res.json({course:await Course.find({})});
    }
  });


  router.get('/course/:courseId', authenticateJwt,async (req, res) => {
    const course = await Course.findOne({_id:req.params.courseId});
    res.json(course?course:undefined);

  });


  module.exports=router;


