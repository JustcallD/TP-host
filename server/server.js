const express = require("express");
const app = express();

// DotEnv
const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => res.send("Hello World!"));
// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
