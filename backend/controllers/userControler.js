const user = require("../models/userModel");

// login controler
const login = async (req, res) => {
  res.json({ mddg: "logged in successfily" });
};

// signup controler
const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = await user.signup(email, password);
    res.status(200).send(newUser);
  } catch (error) {
    res.status(501).json({ err: "mail is already in use!" });
  }
};
module.exports = { signup, login };
