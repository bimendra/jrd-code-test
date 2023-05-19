const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "/dist/jrd-code-test")));

app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "/dist/jrd-code-test/index.html"))
);

app.listen(3000, () => console.log("Server started"));
