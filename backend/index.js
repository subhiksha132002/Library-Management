require("./db");

const cors = require("cors");

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const membersRoute = require("./routes/members");

const booksRoute = require("./routes/books");

app.use(
  cors({
    origin: "*",

    methods: ["GET", "POST", "PUT", "DELETE"],

    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});

app.use("/members", membersRoute);

app.use("/books", booksRoute);
