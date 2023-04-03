import express, { Express, Request, Response } from "express";
import usersRouter from "./routes/UsersRouter";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.json("Hello Word");
});

app.get("/hello", (req: Request, res: Response) => {
  res.json("hello");
});

app.use("/api/users", usersRouter);

export default app;
