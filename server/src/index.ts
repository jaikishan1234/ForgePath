import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB().then(() => console.log("DB connected"));

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});