// models/post.js
const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  ];
  
  const Post = {
    all: () => posts,
    findById: (id) => posts.find(post => post.id === parseInt(id)),
    create: (title, content) => {
      const newPost = { id: posts.length + 1, title, content };
      posts.push(newPost);
      return newPost;
    }
  };
  
  module.exports = Post;
  