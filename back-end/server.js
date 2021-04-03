const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));



const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/library', {
  useNewUrlParser: true
});


const itemSchema = new mongoose.Schema({
    title: String,
    author: String,
  });
  
  const Book = mongoose.model('Book', itemSchema);

  app.post('/api/books', async (req, res) => {
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
    });
    try {
      await book.save();
      res.send(book);
    } catch (error) {
      // console.log(error);
      res.sendStatus(500);
    }
  });

  app.get('/api/books', async (req, res) => {
    try {
      let books = await Book.find();
      res.send(books);
    } catch (error) {
      // console.log(error);
      res.sendStatus(500);
    }
  });

  app.listen(3000, () => console.log('Server listening on port 3000!'));
