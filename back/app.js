const cors = require("cors");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/user", require("./routes/Users"));
app.use("/api/vault", require("./routes/Vaults"));

module.exports = app;
