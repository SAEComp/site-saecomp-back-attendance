import express from "express";
import { addAttendance } from "../controllers/addAttendance.controller";

const userRouter = express.Router();

userRouter.post("/attendance", addAttendance);

export default userRouter;
