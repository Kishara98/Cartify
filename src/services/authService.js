const User = require("../models/usersModel.js");
const { hashPassword, comparePassword, generateToken } = require("../utils/userHelper.js");

async function createUserAccount(user) {
  try {
    const { name, email, password } = user;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exist");
    }
    console.log(existingUser);
    const hashedPassword = await hashPassword(password);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function loginUser({ email, password }) {
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    throw new Error("User not available");
  }
  console.log("existingUser>>", existingUser);
  const isEqual = await comparePassword(password, existingUser.password);
  if (isEqual) {
    const user = {
      _id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email
    };
    const token = await generateToken(user);
    return token;
  } else {
  }
}

module.exports = {
  createUserAccount,
  loginUser,
};
