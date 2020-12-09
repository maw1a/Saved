require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection error" + err.message);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

require("./models/User");
require("./models/Vault");

const app = require("./app");

const port = process.env.PORT | 8000;

app.listen(port, () => {
  console.log("listening on PORT 8000");
});
