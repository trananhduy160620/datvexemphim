const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const db = require("./controllers/db");
const HomeRouter = require("./routers/Homepage");
const rapRouter = require('./routers/menuRap');
const phimRouter = require("./routers/phim/phimDangChieu");

const app = express();

app.set("view engine", "ejs");
app.set("layout", "./layouts");

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



app.use(HomeRouter);
app.use(rapRouter);
app.use(phimRouter);

db.sync().then(function () {
  const port = process.env.PORT || 3000;
  console.log(`Server is listening on port ${port}`);
  app.listen(port);
}).catch(console.error);
