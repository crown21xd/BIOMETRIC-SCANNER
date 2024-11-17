import bcryptjs from "bcryptjs";
import { db } from "../database.js";

export const register = async (req, res) => {
  const { firstName, lastName, studentNumber, yearLevel, pinKey } = req.body;

  try {
    if (!firstName || !lastName || !studentNumber || !pinKey) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    if (studentNumber.length !== 11) {
      return res.status(400).json({ success: false, message: "Student number must be exactly 11 characters long" });
    }

    const studentAlreadyExists = db.findUser(studentNumber);
    if (studentAlreadyExists) {
      return res.status(400).json({ success: false, message: "Student already exists" });
    }

    const hashedPinKey = await bcryptjs.hash(pinKey, 10);

    const user = {
      name: `${lastName} ${firstName}`,
      studentNumber,
      yearLevel,
      pinKey: hashedPinKey,
    };

    db.addUser(user);

    console.log("All registered users:", db.getUsers());

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user,
        pinKey: undefined,
      },
    });
  } catch (error) {
    console.log("Error in register: ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const signin = async (req, res) => {
  const { studentNumber, pinKey } = req.body;

  try {
    const user = db.findUser(studentNumber);

    if (!user) {
      return res.status(400).json({ success: false, message: "Student number not found" });
    }

    const isPinKeyValid = await bcryptjs.compare(pinKey, user.pinKey);
    if (!isPinKeyValid) {
      return res.status(400).json({ success: false, message: "Invalid pinKey" });
    }

    res.status(200).json({
      success: true,
      message: "User signed in successfully",
      user: {
        ...user,
        pinKey: undefined,
      },
    });
  } catch (error) {
    console.log("Error in signin: ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const signout = async (req, res) => {
  const { studentNumber, pinKey } = req.body;

  try {
    const user = db.findUser(studentNumber);
    if (!user) {
      return res.status(400).json({ success: false, message: "Student number not found" });
    }

    const isPinKeyValid = await bcryptjs.compare(pinKey, user.pinKey);
    if (!isPinKeyValid) {
      return res.status(400).json({ success: false, message: "Invalid PinKey" });
    }

    // Remove the user from the array
    const removed = db.removeUser(studentNumber);

    if (removed) {
      res.status(200).json({
        success: true,
        message: "User signed out successfully",
      });
    }
  } catch (error) {
    console.log("Error in signout: ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};
