const mongoose = require("mongoose");

const vaultSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: "Owner is required",
    },
    name: {
      type: String,
      required: "Name is required!",
    },
    platform: {
      type: String,
      required: "Platform is required!",
    },
    user: {
      type: String,
      required: "User is required",
    },
    password: {
      type: String,
      required: "Password is required!",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vault", vaultSchema);
