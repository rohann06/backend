import * as mongoose from 'mongoose';

export const LabTestSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});
