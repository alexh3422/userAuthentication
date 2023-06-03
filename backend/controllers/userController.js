import asyncHandler from "express-async-handler";

// auth user and set token
// route = POST /api/users/auth
// access = Public
const authUser = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error("There was an error somewhere");

  res.status(200).json({ message: "User was Authenticated" });
});

export { authUser };
