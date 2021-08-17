//const { stringify } = require("uuid");

const mongoose = require("mongoose")

//console.log("測試有沒有在user model")

const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    require:true,
  },
  pic:{
    type:String,
    default:'https://res.cloudinary.com/yalecloud/image/upload/v1623929382/noimage_jlfaqb.jpg'
  }
})

mongoose.model("User",UserSchema)