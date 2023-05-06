const mongoose = require("mongoose");

const bookRequestSchema = mongoose.Schema({
  requestedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
  },
  requestedFor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
});

const bookRequestModel = new mongoose.model("BookRequest", bookRequestSchema);

module.exports = bookRequestModel;
