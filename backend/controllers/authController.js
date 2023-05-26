const User = require("../models/authModel");
const bcript = requre("bcriptjs");

const register = async (req, res) => {
  try {
    const { username: password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).json({ message: "User already taken" });
    }
    const hashedPassword = bcript.hash(password, 10);
    const user = new User({ username, password: hashedPassword });

    await user.save();
    res.status(200).json({ message: "Created new user" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({ message: "Invalid Username" });
    }
    const isPasswordValid = bcript.compare(password, user.password);
    if (!sPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    const token = jwt.sign({ userId: user._id }, "secretKey");
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const logout = async (req, res) => {};

module.exports = { login, register, logout };
