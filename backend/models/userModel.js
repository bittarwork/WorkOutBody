const mongoose = require("mongoose");
const { schema } = require("./workoutModel");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const user = new Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      default: null,
      required: true,
    },
  },
  { timestamps: true }
);

user.statics.signup = async function (email, password) {
  const exist = this.findOne({ email });
  if (!exist) {
    throw Error("email is already in used!");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = this.create({
    email,
    password: hashedPassword,
  });
  return newUser;
};

module.exports = mongoose.model("user", user);
