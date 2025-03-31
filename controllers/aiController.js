import { getResponse } from "../services/AiService.js";

export const generateReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).json({ error: "Code is required" });
  }
  const response = await getResponse(code);
  res.send(response);
};
