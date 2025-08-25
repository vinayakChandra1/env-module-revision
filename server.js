const express = require("express");
const path = require("path");

const app = express();

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(__dirname));

// Route for index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
