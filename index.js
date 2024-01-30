const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const expenseRoute = require("./routes/expense");
const sequelize = require("./util/database");

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/expense", expenseRoute);

sequelize
  .sync()
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
