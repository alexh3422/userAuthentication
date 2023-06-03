import express from "express";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 5001;

import userRoutes from "./routes/userRoutes.js"; 

const app = express();

app.use('/api/users', userRoutes)

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
