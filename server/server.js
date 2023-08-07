const express = require("express");
const app = express();

// DotEnv
const dotenv = require("dotenv");
dotenv.config();
// cors
const cors = require("cors");
app.use(cors());

// data
const dummyData = require("./Data");

app.get("/", (req, res) => {
  res.json(dummyData);
});

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
