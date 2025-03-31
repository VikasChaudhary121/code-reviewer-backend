import express from "express";
import dotenv from "dotenv";
import aiRoutes from "./routes/aiRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/ai", aiRoutes);

app.listen(3000, () => {
  console.log("Server is running on PORT:", 3000);
});
