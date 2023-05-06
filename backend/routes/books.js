const express = require("express");

const router = express.Router();

const Book = require("../model/bookSchema");

router.get("/", async (req, res) => {
  try {
    const title = req.query.title;

    const author = req.query.author;

    const query = title || author ? { title, author } : {};

    const books = await Book.find(query);

    res.json(books);
  } catch (ex) {
    res.status(500).send(ex);
  }
});

router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body.book);

    await book.save();

    res.status(201).json(book);
  } catch (ex) {
    res.status(500).send(ex);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body.book,
      {
        new: true,
      }
    );
    if (!updatedBook) return res.status(404).send("Book not found");

    res.json(updatedBook);
  } catch (ex) {
    res.status(500).send(ex);
  }
});

module.exports = router;
