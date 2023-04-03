import express, { Request, Response } from "express";
import UserModel, { UserInterface } from "../models/userModel";

export const countAllUsers = () => {};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const { limit = "5", skip = "0" } = req.query;
    const result: UserInterface[] = await UserModel.find({})
      .limit(Number(limit))
      .skip(Number(skip));
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const result: UserInterface | null = await UserModel.findById(_id);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const { _id } = req.params;
    const result: UserInterface | null = await UserModel.findByIdAndUpdate(
      _id,
      {
        name,
        email,
        password,
      }
    );
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    await UserModel.findByIdAndDelete(_id);
    res.json(_id);
  } catch (error) {
    console.log(error);
  }
};
