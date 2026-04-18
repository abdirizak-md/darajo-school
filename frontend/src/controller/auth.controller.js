import e from "express";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Email, password, and role are required"
      });
    }

    // Check if user exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const user = await User.create({
      email,
      passwordHash: password, // storing plain password
      role
    });

    res.status(201).json({
      message: "User registered successfully",
      userId: user._id,
      email: user.email,
      role: user.role
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.passwordHash !== password) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    res.json({
      message: "Login successful",
      userId: user._id,
      role: user.role
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};