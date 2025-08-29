const mongoose=require('mongoose');

const SkillsSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  logo:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  }
});
module.exports = mongoose.model("Skill", SkillsSchema);
