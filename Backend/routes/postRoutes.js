const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/createPost', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = new Post({ title, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/listPost', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/editPost/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const post = await Post.findByIdAndUpdate(id, { title, content }, { new: true });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/deletePost/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndDelete(id);
    res.status(200).json({ message: 'Post deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
