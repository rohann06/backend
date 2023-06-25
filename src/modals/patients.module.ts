import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientsController } from '../controllers/patients.controller';
import { PatientsService } from './patients.service';
import { PatientSchema } from './patient.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Patient', schema: PatientSchema }])],
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}
