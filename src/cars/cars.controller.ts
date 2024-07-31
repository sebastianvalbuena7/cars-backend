import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto';
import { UpdateCarDto } from './dto';

@Controller('cars')
// ! Vaildar pipe a nivel de controlador
// @UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  // Validar DTO
  // @UsePipes(ValidationPipe)
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Body() updateCarDto: UpdateCarDto,
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    this.carsService.delete(id);
  }
}
