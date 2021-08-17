const express = require('express')
const router = express.Router()
const requireLogin = require('../middleware/requireLogin')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { JWT_SECRET } = require('../key.js')


router.get('/checkloginstate', requireLogin, (req, res) => {
  console.log(jwt.JWT_SECRET)
  res.json({ data: "receive /checkLoginState" })
})
/*
router.get('/allpost', requireLogin, (req, res) => {
})
*/
router.post('/signin',(req,res)=>{
  const {email,password} = req.body
  const User = mongoose.model("User")
  User.findOne({email:email})
  .then(savedUser=>{
    if(!savedUser){
      res.status(422).json({error:"invalid email or password"})
      return
    }
    bcrypt.compare(password,savedUser.password)
    .then((doMatch)=>{
      if(doMatch){
        const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
        const {_id,name,email,pic} = savedUser
        res.json({token,user:{_id,name,email,pic}})
      }
      
    })
    .catch(err=>{
      console.log(err)
    })
  })

  console.log("request /signin data: ", password)
  //res.json({data:"server requested"})
})


router.post('/signup', (req, res) => {
  const { name, email, password } = req.body
  //console.log(name)
  const User = mongoose.model('User')
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {      //email已經註冊的case
        return res.status(422).json({ error: "user email is already exists" })
      }
      //res.json({data:"code: db, user email already exists"})
      bcrypt.hash(password, 12).then((hashedpwd)=>{   //email還沒註冊的case
        const newUser = new User({      //宣告新資料
          name:name,
          email:email,
          password:hashedpwd
        })
        newUser.save()                 //資料庫操作 save()
        .then(user=>{                   //回報成功
          res.json({data:"user data saved successful"})
        }).
        catch(err=>{                    //失敗log
          console.log(err)
        })
      })
    })
    .catch(err=>{
      console.log(err)
    })
  
  //res.json({ data: "code: 200, /signup data received" })
})

router.get('/test', (req, res) => {
  //console.log("in /test")
  const Data = mongoose.model('User')
  const init = new Data({
    name: "test1",
    email: "test1@gmail.com",
    password: "12345"
  })
  init.save()
  res.json({ data: "code: 200, /test data received" })
})


module.exports = router