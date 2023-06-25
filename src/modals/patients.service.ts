import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient } from './patient.interface';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel('Patient') private readonly patientModel: Model<Patient>,
  ) {}

  async findAll(): Promise<Patient[]> {
    return this.patientModel.find().exec();
  }
}
