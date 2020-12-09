const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  const exist = await User.findOne({
    email,
  });

  if (exist) {
    res.json({
      message: "Email is linked with another account!",
    });
  } else {
    const user = new User({
      name,
      email,
      password,
    });

    await user.save();

    const token = await jwt.sign({ id: user.id }, process.env.SECRET);

    res.json({
      message: "User " + name + " Registered Successfully!",
      token,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
    password,
  });

  if (!user) {
    res.json({
      message: "Email and Password did not match",
    });
  }

  const token = await jwt.sign({ id: user.id }, process.env.SECRET);

  res.json({
    message: "User logged successfully",
    token,
  });
};
