import { Router } from "express";
import {
  createUser,
  deleteUser,
  getOneUser,
  getUsers,
  updateUser,
} from "../controllers/usersController";

const usersRouter = Router();

usersRouter.get("/", getUsers);

usersRouter.get("/:_id", getOneUser);

usersRouter.post("/", createUser);

usersRouter.patch("/", updateUser);

usersRouter.delete("/", deleteUser);

export default usersRouter;
