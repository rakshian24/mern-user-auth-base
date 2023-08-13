import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// description  SignIn user and set token
// route        POST /api/v1/users/signIn
// access       Public
const signInUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// description  Sign up a user
// route        POST /api/v1/users
// access       Public
const signUpUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// description  Sign out user
// route        POST /api/v1/users/signOut
// access       Public
const signOutUser = asyncHandler((req, res) => {
  res.status(200).json({
    message: 'Sign out a user'
  });
});

// description  Get a user profile
// route        GET /api/v1/users/profile
// access       Private
const getUserProfile = asyncHandler((req, res) => {
  res.status(200).json({
    message: 'User Profile'
  });
});

// description  Update user profile
// route        PUT /api/v1/users/profile
// access       Private
const updateUserProfile = asyncHandler((req, res) => {
  res.status(200).json({
    message: 'Update user Profile'
  });
});

export {
  signInUser,
  signUpUser,
  signOutUser,
  getUserProfile,
  updateUserProfile
}