const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

app.use(express.json());

app.use(cors());

const routes = require("./routes/todo.route");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database Connectd..");
  })
  .catch(() => {
    console.log("Can't connect to Database...");
  });

app.use(routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
