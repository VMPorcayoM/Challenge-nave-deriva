import express from "express";
import cors from "cors";
import statusRoutes from "./routes/statusRoutes";
import { PORT } from "./config/constants";

const app = express();

app.use(cors());
app.use("/", statusRoutes);

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});