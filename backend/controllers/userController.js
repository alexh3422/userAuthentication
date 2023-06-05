import asyncHandler from "express-async-handler";

// auth user and set token
// route = POST /api/users/auth
// access = Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User was Authenticated" });
});

// register user
// route = POST /api/users/register
// access = Public

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});

// logout user
// route = POST /api/users/logout
// access = Public

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

// get user profile
// route = GET /api/users/profile
// access = Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

// update user profile
// route = PUT /api/users/profile
// access = Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
 };
