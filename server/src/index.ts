import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import authRoutes from "./routes/authRoutes"
import { authMiddleware } from "./middleware/auth";
dotenv.config();
const PORT = process.env.PORT || 5000;

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: [],
  })
);
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/api/auth", authRoutes);
app.get('/api/protected', authMiddleware, (req: Request, res: Response,) => {
  res.json({ message: 'Protected content' });
});


app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to my server api, by:wahyu",
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
