const express = require('express');
const path = require('path');
const postController = require('./controllers/postController');

const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPostById);
app.post('/posts/create', postController.createPost);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
