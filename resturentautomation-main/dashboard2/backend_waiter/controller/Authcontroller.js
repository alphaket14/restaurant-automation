import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose, { isValidObjectId } from "mongoose";

// Creating User

export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const { password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, salt);
  req.body.password = hashedPassword;
  const newUser = new UserModel(req.body);

  try {
    const oldUser = await UserModel.findOne({ email });
    if (oldUser) {
      return res.status(400).json("Username Not available");
    }
    const user = await newUser.save();

    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    console.log("usercreated successfully");
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login user

export const Loginuser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      if (!validity) {
        res.status(400).json("Wrong Password");
      } else {
        const token = jwt.sign(
          { email: user.email, id: user._id },
          process.env.SECRET_KEY,
          { expiresIn: "1h" }
        );
        res.status(200).json({ token, user });
      }
    } else {
      res.status(404).json("User does not exist");
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get user by id
export const getuserbyid = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      const user = await UserModel.findById(id);
      console.log(user);
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(404).json("User not found");
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentuserid } = req.body;
  if (id === currentuserid) {
    try {
      const user = await UserModel.findByIdAndDelete(id);
      res.status(200).json("User deleted Succesfully");
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(403).json("Access Denied ");
  }
};

export const updateUser = async (req, res) => {
  const Paramid = req.params.id;
  // const { _id, password } = req.body;
  // _id = mongoose.Types.ObjectId.fromString(_id);
  console.log(Paramid);

  if (Paramid) {
    try {
      // if (password) {
      //   const salt = await bcrypt.genSalt(10);
      //   req.body.password = await bcrypt.hash(password, salt);
      // }
      // if (password) {
      //   const salt = await bcrypt.genSalt(10);
      //   req.body.password = await bcrypt.hash(password, salt);
      // }
      const user = await UserModel.findByIdAndUpdate(Paramid, req.body, {
        new: true,
      });
      // const token = jwt.sign(
      //   {
      //     username: user.username,
      //     id: user._id,
      //   },
      //   process.env.SECRET_KEY,
      //   {
      //     expiresIn: "1h",
      //   }
      // );
      res.status(200).json({ user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(403).json("Access Denied! you can only update your own profile");
  }
};
