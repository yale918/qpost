const express = require('express')

module.exports =  (req,res,next) =>{
  
  const {authorization} = req.headers
  
  console.log("authorization: ",authorization)
  const token = authorization.replace('Bearer ','')
  const test = null

  if(token==='null'){
    //console.log("in !authorization")
    //res.json({ data: "code: 401, you must be logged in" })
    res.status(401).json({error:"you must be logged in"})
    //issue要解
  }
  
  
  //console.log("token: ",token)
  next()
}
