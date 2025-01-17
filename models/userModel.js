const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Fill Name"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please Fill Email"],
    },
    password: {
      type: String,
      required: [true, "Please Fill pasword"],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
