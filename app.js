const path = require("path");
const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require("body-parser");
const session = require("express-session");
const db = require("./models/db");
const HomeRouter = require("./routers/Homepage");
const rapRouter = require("./routers/rap");
const phimRouter = require("./routers/phim");
const datVeRouter = require("./routers/datVe");
const lichSuDatVeRouter = require("./routers/lichSuDatVe");

const app = express();

app.set("view engine", "ejs");
app.set("layout", "./layouts/index");

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: [process.env.SESSION_KEY || "mySecretKey"],
    resave: true,
    saveUninitialized: false,
  })
);


app.use(expressLayouts);
app.use(HomeRouter);
app.use(rapRouter);
app.use(phimRouter);
app.use(datVeRouter);
app.use(lichSuDatVeRouter);

db.sync().then(function () {
  const port = process.env.PORT || 3000;
  console.log(`Server is listening on port ${port}`);
  app.listen(port);
}).catch(console.error);
