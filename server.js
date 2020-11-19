const express = require("express");
const path = require("path");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "client/build")));

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

app.listen(() => console.log(`Server is listening on port: ${PORT}!`));
