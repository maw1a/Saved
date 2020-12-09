const mongoose = require("mongoose");
const Vault = mongoose.model("Vault");

exports.addPassword = async (req, res) => {
  const { name, platform, user, password } = req.body;
  const owner = req.payload.id;

  const exist = await Vault.findOne({
    owner,
    name,
    platform,
    user,
    password,
  });

  if (exist) {
    res.json({
      message: "Password already exists!",
    });
  } else {
    const vault = new Vault({
      owner,
      name,
      platform,
      user,
      password,
    });

    await vault.save();

    res.json({
      message: "Password added to the vault",
    });
  }
};

exports.removePassword = async (req, res) => {
  const { id } = req.params;

  const vault = await Vault.findByIdAndDelete(id);

  res.json({
    message: "Password has been removed!",
    data: {
      vault,
    },
  });
};

exports.fetchPassword = async (req, res) => {
  const { id } = req.params;

  const vault = await Vault.findById(id);

  res.json({
    message: "Password has been fetched!",
    data: {
      vault,
    },
  });
};

exports.updatePassword = async (req, res) => {
  const { id, password } = req.body;

  const vault = await Vault.findByIdAndUpdate(id, { $set: { password } });

  res.json({
    message: "Password has been updated!",
    data: {
      vault,
    },
  });
};

exports.fetchallPassword = async (req, res) => {
  const owner = req.payload.id;

  const passes = await Vault.find(
    { owner },
    "name platform user password"
  ).exec();

  res.json({
    message: "passwords sent!",
    data: {
      passwords: passes,
    },
  });
};
