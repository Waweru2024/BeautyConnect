import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import usersRouter from "./routes/users.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);
app.use("/users", usersRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`BeautyConnect API running on port ${PORT}`);
});
