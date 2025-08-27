const Project = require("../models/projectModel");
const Skill = require("../models/SkillsModel");
const Blog = require("../models/BlogModel");

// GET: Count Projects, Skills, Blogs
 const getCounts = async (req, res) => {
  try {
    const projectCount = await Project.countDocuments();
    const skillCount = await Skill.countDocuments();
    const blogCount = await Blog.countDocuments();

    res.json({
      projects: projectCount,
      skills: skillCount,
      blogs: blogCount,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports={getCounts};