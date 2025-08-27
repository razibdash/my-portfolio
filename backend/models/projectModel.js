const mongoose=require("mongoose");

const projectSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
  tech:[String],
  githubLink:{
    type:String,
    required:true
  },
  liveDemoLink:{
    type:String,
    
  },

});

module.exports=mongoose.model("Project",projectSchema);