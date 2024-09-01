const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.render('home', { posts });
});

// Create a new post
router.post('/create', async (req, res) => {
  const { title, content } = req.body;
  await Post.create({ title, content });
  res.redirect('/');
});

module.exports = router;
