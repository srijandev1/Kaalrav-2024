const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 8000;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("./assets")); 

app.use(expressLayouts);

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running thr server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
