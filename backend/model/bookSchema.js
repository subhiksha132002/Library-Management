const mongoose = require("mongoose");

const issuedToSchema = new mongoose.Schema({
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
  },
  issued_on: {
    type: Date,
    default: Date.now(),
  },
});

const bookSchema = new mongoose.Schema({
  author: { type: String },
  count: { type: Number },
  edition: { type: String },
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String },
  issuedTo: [issuedToSchema],
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
