const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

app.use(express.json());

const routes = require("./routes/todo.route.js");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connectd..");
  })
  .catch(() => {
    console.log("Can't connect to Database...");
  });

app.use('/', routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
