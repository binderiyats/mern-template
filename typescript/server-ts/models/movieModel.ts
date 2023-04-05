import mongoose, { Schema, Document, Types } from "mongoose";

interface MovieAwards {
  wins: number;
  nomination: number;
  text: string;
}

interface MovieIMDB {
  rating: number;
  votes: number;
  id: number;
}

interface MovieTomatoes {
  viewer: {
    rating: number;
    numbReviews: number;
    meter: number;
  };
  lastUpdated: Date;
}

export interface IMovie extends Document<Types.ObjectId> {
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  num_mflix_comments: number;
  title: string;
  fullplot: string;
  contries: string[];
  released: Date;
  directors: string[];
  rated: string;
  awards: MovieAwards;
  lastupdated: Date;
  year: number;
  imdb: MovieIMDB;
  type: string;
  tomatoes: MovieTomatoes;
}

const movieSchema = new Schema<IMovie>({
  plot: { type: String, required: true },
  // genres: { [type: String, unique: true, required: true] },
  runtime: { type: Number, required: true },
});

const MovieModel = mongoose.model<IMovie>("Movie", movieSchema);

export default MovieModel;
