import { Controller, Get } from '@nestjs/common';
import { PatientsService } from '../modals/patients.service';
import { Patient } from '../modals/patient.interface';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  async findAll(): Promise<Patient[]> {
    return this.patientsService.findAll();
  }
}
