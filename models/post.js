const mongoose = require('mongoose')


const PostSchema = new mongoose.Schema({
	author:String,
	picture:String,
	title:String,
	content:String,
	
	like:{type:Number,default:0},
	comment:[{body:String,date:Date}],
  date: {type:Date, default: Date.now}
})

/*
const PostScema = new mongoose.Schema({
	picture:{
		type:String,
		required:true,
	},
	title:{
		type:String,
		required:true,
	},
	content:{
		type:String,
		required:true,
	},
	like:{
		type:Number,
		default:0,
	},
	comment:{
		type:Array,
	}
})
*/
mongoose.model("Post",PostSchema)