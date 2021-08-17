const express = require('express')
const router = express.Router()
const requireLogin = require('../middleware/requireLogin')
const mongoose = require('mongoose')

router.get('/testpost',(req,res)=>{
  res.json({server_res:"fetch /testpost"})
})

router.get('/allposts',(req,res)=>{
  const Post = mongoose.model("Post")
  Post.find({}).sort("-_id")
  .then((data)=>{
    //console.log(data)
    console.log("data.length: ",data.length)
    
    res.json({data})
    //res.json({server_res:"fetch /allposts"})
  })
  .catch((err)=>{
    console.log(err)
  })
  //res.json({server_res:"fetch /allposts"})
})

router.post('/createpost',requireLogin,(req,res)=>{
  //console.log("testtest")
  //console.log(req.body.title+" | "+req.body.content+" | "+  req.body.picture)
  console.log(req)

  const Post = mongoose.model("Post")
  const post = new Post({
    author:req.body.author,
    picture:req.body.picture,
    title:req.body.title,
    content:req.body.content
  })
  post.save((err)=>{
    if(err){
      console.log(err)
      return
    }
    console.log("save database success")
  })


  res.json({server_res:"fetch /createpost"})
  //const Post = mongoose.model("Post")
  //const data = new Post({
    
  //})
})


router.delete('/deletepost',requireLogin,(req,res)=>{
  //console.log('in deletepost api')
  let postid = req.body.postid
  console.log("postid: ",req.body.postid)
  console.log("author: ",req.body.author)
  
  const Post = mongoose.model("Post")
  Post.findByIdAndDelete(postid,(err)=>{
    if(err){
      console.log("couldnt find this postid")
    }
    else{
      console.log('delete success')
    }
  })

  res.json({server_res:"/deletepost api called"})
})





module.exports = router