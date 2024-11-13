// controllers/postController.js
const Post = require('../models/post');

const getAllPosts = (req, res) => {
  const posts = Post.all();
  res.render('index', { posts });
};

const getPostById = (req, res) => {
  const post = Post.findById(req.params.id);
  if (!post) {
    return res.status(404).send('Post not found');
  }
  res.render('post', { post });
};

const createPost = (req, res) => {
  const { title, content } = req.body;
  const newPost = Post.create(title, content);
  res.redirect('/');
};

module.exports = { getAllPosts, getPostById, createPost };
