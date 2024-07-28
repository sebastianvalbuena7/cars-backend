import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) {}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id: number) {
        return this.carsService.findOneById(Number(id));
    }

    @Post()
    createCar(@Body() body: any) {
        console.log(body);

        return {
            ok: true,
            method: 'POST'
        }
    }

    @Patch(':id')
    updateCar(@Body() body: any, @Param('id', ParseIntPipe) id: number) {
        console.log(body);

        return {
            ok: true,
            method: 'POST'
        }
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        console.log(id);

        return {
            ok: true,
            method: 'POST'
        }
    }
}
