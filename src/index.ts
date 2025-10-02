import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import userRouter from "./routers/user.routers";

// Instanciação do express
const app = express();

// Número da porta usada
const port: number = 3000;

// ================= middlewares ================= //
app.use(express.json());

// ================= routers ================= //
app.use("/api/attendance", userRouter);

// ================= error handler ================= //
app.use(errorHandler);

app.listen(port, () => {
    console.log(`serving on http://localhost:${port}`);
});