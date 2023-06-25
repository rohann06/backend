import * as mongoose from 'mongoose';

export const PatientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});
