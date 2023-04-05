import { Router } from "express";
import {
  createMovie,
  deleteMovie,
  getMovies,
  getOneMovie,
  updateMovie,
} from "../controllers/moviesController";

const moviesRouter = Router();

moviesRouter.get("/", getMovies);

moviesRouter.get("/:_id", getOneMovie);

moviesRouter.post("/", createMovie);

moviesRouter.patch("/", updateMovie);

moviesRouter.delete("/", deleteMovie);

export default moviesRouter;
