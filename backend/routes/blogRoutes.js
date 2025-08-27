const express=require("express");
const {protect}=require("../middleware/authMiddleware");
const router=express.Router();

router.post("/blog",protect,blogController.createBlog);
router.get("/blog",blogController.getAllBlogs);
router.get("/blog/:id",protect,blogController.getBlogById);
router.put("/blog/:id",protect,blogController.updateBlog);
router.delete("/blog/:id",protect,blogController.deleteBlog);

module.exports=router;