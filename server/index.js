const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();
const cors=require("cors");
const adminRouter=require("./routes/admin");
const userRouter=require("./routes/user");

app.use(express.json());
app.use(cors());



app.use("/admin",adminRouter);
app.use("/user",userRouter);
app.get("/*", (req, res) => {
    console.log(adminRouter);
    res.json({msg: "hiii"})
});




mongoose.connect('mongodb+srv://lucky9584826096:Hy4S7sQYyfsZUnT1@cluster0.d4utrqy.mongodb.net/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(3009, () => console.log('Server running on port 3009'));