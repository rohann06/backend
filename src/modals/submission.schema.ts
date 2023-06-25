import * as mongoose from 'mongoose';

export const SubmissionSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  labTest: { type: mongoose.Schema.Types.ObjectId, ref: 'LabTest' },
});
