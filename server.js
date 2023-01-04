import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "client/build")));

//MongoDB Connection
import { connectDB } from "./src/config/dbConfig.js";
connectDB;

//routers
import userRouter from "./src/routers/userRouter.js";
import { isAuthorized } from "./src/middleware/authMiddleware.js";
app.use("/library/user", userRouter);


//port
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Your server is running at http://localhost:${PORT}`);
});
