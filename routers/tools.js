const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')




router.post('/changedb',(req,res)=>{
  console.log('test request')
  //res.json({data:"test channel /changedb"})
})

module.exports = router