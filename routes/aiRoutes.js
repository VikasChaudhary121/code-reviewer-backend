import express from "express";
import { generateReview } from "../controllers/aiController.js";

const route = express.Router();

route.post("/get-review", generateReview);

export default route;
