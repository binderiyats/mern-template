import mongoose, { Schema } from "mongoose";

export interface CommentInterface {
  _id: string;
  name: string;
  email: string;
  movie_id: string;
  text: string;
  date: Date;
}

const CommentSchema = new Schema<CommentInterface>({});

const CommentModel = mongoose.model<CommentInterface>("Comment", CommentSchema);

export default CommentModel;
