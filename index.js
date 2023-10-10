const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello for my first ever server");
});
app.get("/data", (req, res) => {
  res.send("More data coming soooooooooooon");
});

app.listen(port, () => {
  console.log(`My first server in running on port: ${port}`);
});
