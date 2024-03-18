const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const router = express.Router();
const {Admin,User,Courses}=require("../db");
const {secretKey,authenticateJwt}= require("../middleware/auth");


router.post('/signup', async (req, res) => {
    // logic to sign up user
    const {email, password}=req.body;
    const user= await User.findOne({email});
    if(user){
      res.status(403).send({message:"user already exist"})
    }
    else{
      const newUser=new User({email, password});
      const token=jwt.sign({email,role:"user"},secretKey,{expiresIn:"1h"});
      await newUser.save();
      res.send({message:"user sign up sucessfully",token});
    }
  });
  
  router.post('/signin',async (req, res) => {
    // logic to log in user
    const {email,password}=req.headers;
    const user=await User.findOne({email});
    if(user){
      const token=jwt.sign({email,role:"user"},secretKey,{expiresIn:"1h"});
      res.send({message:"user logged in sucessfully",token});
    }
    else{
      res.status(404).send({message:"user not found"})
    }
  });
  
  router.get('/courses',authenticateJwt,async (req, res) => {
    // logic to list all courses
    if(req.user.role!="user"){
      res.status(404).send({message:"user not found 11"});
    }
    else{
    const Courses=await Course.find({published:true});
    res.json(Courses);
    }
  
  });
  
  router.post('/courses/:courseId',authenticateJwt,async (req, res) => {
    // logic to purchase a course
    if(req.user.role!="user"){
      res.status(404).send({message:"user not found 11"});
    }
    else{
    const course=await Course.findById(req.params.courseId);
    const user=await User.findOne({email:req.user.email});
    // const check=user.purchasedCourses.find(req.params.courseId);
    // if(check){
    //   res.status(403).send("course already purchased");
    // }
    if(course){
      user.purchasedCourses.push(course);
      await user.save();
      res.send("course purchased sucessfully");
    }
    else{
      res.status(404).send("course does not exist")
    }
  }
  });
  
  router.get('/purchasedCourses',authenticateJwt, async (req, res) => {
    // logic to view purchased courses
    if(req.user.role!="user"){
      res.status(404).send({message:"user not found 11"});
    }
    else{
    const user=await User.findOne({email:req.user.email}).populate("purchasedCourses");
      res.send({courses:user.purchasedCourses||[]});
    }
  });
  router.use((req,res)=>{
    console.log("wrong route called");
    res.status(404).send("wrong route called");
  })



  module.exports=router;