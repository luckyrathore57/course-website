const {secretKey}=require("../secret");

const jwt=require('jsonwebtoken');



function authenticateJwt(req,res,next){
  const authDetails=req.headers.authorization; //getting data from headers
  if(authDetails){
    const token =authDetails.split(' ')[1]; //getting token which is 2nd(index 1) word after split with ' ' 
    jwt.verify(token,secretKey,(err,user)=>{//verify token with jwt verify function
      if(err){
        res.sendStatus(403);//if can't verify send 403 error
      }
      else{
        req.user=user; //gives username and role to next function for futher task
        next();
      }
    }
    )
  }
  else{
    res.sendStatus(401)
  }
}



module.exports={authenticateJwt,secretKey};