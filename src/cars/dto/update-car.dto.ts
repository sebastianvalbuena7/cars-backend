import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {
    @IsString()
    @IsUUID()
    // * Valor opcional
    // @IsOptional() ?
    readonly id?: string;
    
    // Personalizar mensaje de error
    @IsString({message: `The brand most be a cool string`})
    readonly brand: string;

    @IsString()
    @MinLength(3, {message: 'Deberia tener al menos 3 letras'})
    readonly model: string;
}