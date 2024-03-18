const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();
const cors=require("cors");
const adminRouter=require("./routes/admin");
const userRouter=require("./routes/user");
const {monogURL}=require("./secret");

app.use(express.json());
app.use(cors());



app.use("/admin",adminRouter);
app.use("/user",userRouter);
app.get("/*", (req, res) => {
    console.log(adminRouter);
    res.json({msg: "hiii"})
});




mongoose.connect(monogURL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(3000, () => console.log('Server running on port 3000'));