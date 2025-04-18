import connection from "./database/connect.db.js";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cookieParser());
const allowedOrigins = ["http://localhost:5173", "https://neocode.rakeshp.me"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

import userRoute from "./routes/profile.user.routes.js";
import problemExecuteRoute from "./routes/problem.execute.routes.js";
import snippetsRoute from "./routes/snippets.routes.js";

app.use("/api/user", userRoute);
app.use("/api/problem", problemExecuteRoute);
app.use("/api/snippets", snippetsRoute);

connection();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is listening at the ${port}`);
});
