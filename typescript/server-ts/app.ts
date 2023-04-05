import express, { Express, Request, Response } from "express";
import usersRouter from "./routes/UsersRouter";
import moviesRouter from "./routes/MoviesRouter";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.json("Hello Word");
});

app.get("/hello", (req: Request, res: Response) => {
  res.json("hello");
});

app.use("/api/users", usersRouter);
app.use("/api/movies", moviesRouter);

export default app;
