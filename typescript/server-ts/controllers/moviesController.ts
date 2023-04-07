import express, { Request, Response } from 'express';
import MovieModel, { IMovie } from '../models/movieModel';

export const findAllMovieIds = async (req: Request, res: Response) => {
  const result = await M;
};

export const countAllMovies = async (req: Request, res: Response) => {
  res.json(await MovieModel.count({}));
};

export const getMovies = async (req: Request, res: Response) => {
  try {
    const { limit = '5', skip = '0', ordering = 'releasedAsc' } = req.query;
    let sort = '';
    switch (ordering) {
      case 'releasedDesc':
        sort = '-released';
        break;
      case 'imdbRatingDesc':
        sort = '-awards.wins';
        break;
      case 'titleAsc':
        sort = 'title';
        break;
      case 'titleDesc':
        sort = '-title';
        break;
      default:
        sort = 'released';
        break;
    }
    const result: IMovie[] = await MovieModel.find({})
      .sort(sort)
      .limit(Number(limit))
      .skip(Number(skip));
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const getOneMovie = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;

    const result: IMovie | null = await MovieModel.findById(_id);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const createMovie = async (req: Request, res: Response) => {
  try {
    const newUser = await MovieModel.create(req.body);
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const { _id } = req.params;
    const result: IMovie | null = await MovieModel.findByIdAndUpdate(_id, {
      name,
      email,
      password,
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    await MovieModel.findByIdAndDelete(_id);
    res.json(_id);
  } catch (error) {
    console.log(error);
  }
};
