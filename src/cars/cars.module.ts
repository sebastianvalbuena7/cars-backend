import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
    controllers: [CarsController],
    providers: [CarsService],
    // Exportar servicios para usar en otros modulos
    exports: [CarsService]
})
export class CarsModule { }
