const express = require("express");
const router = express.Router();
const blogController = require("../controller/blog.controller");

// Create a new blog
router.post("/create-blog", blogController.createBlog);

// Get all blogs
router.get("/get-blog", blogController.getAllBlogs);

// Get a single blog by ID
router.get("get-blog/:id", blogController.getBlogById);

// Update a blog by ID
router.put("update-blog/:id", blogController.updateBlog);

// Delete a blog by ID
router.delete("delete-blog/:id", blogController.deleteBlog);

module.exports = router;
