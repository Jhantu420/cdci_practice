import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

const userRegister = async (req, res) => {
  try {
    const { name, email, ph, password } = req.body;
    if (!name || !email || !ph || !password) {
      return res.json({
        success: false,
        message: "all fields are required",
      });
    }
    const user = await User.findOne({ ph });
    const userEmail = await User.findOne({ email });
    if (user) {
      return res.json({ message: "phone number is already registered" });
    }
    if (userEmail) {
      return res.json({ message: "email is already registered" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userData = new User({
      name,
      email,
      ph,
      password: hashedPassword,
    });
    await userData.save();
    return res.json({ message: "Registratin Successful..." });
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  const data = await User.find().select("-password");
  // console.log("user data", data);
  return res.json({
    message: "All user's data",
    data,
  });
};
export { userRegister, getUser };
