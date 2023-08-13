import asyncHandler from "express-async-handler";

// description  SignIn user and set token
// route        POST /api/v1/users/signIn
// access       Public
const signInUser = asyncHandler((req, res) => {
  res.status(200).json({
    message: 'Sign in user'
  });
});

// description  Sign up a user
// route        POST /api/v1/users
// access       Public
const signUpUser = asyncHandler((req, res) => {
  res.status(200).json({
    message: 'Signup a user'
  });
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