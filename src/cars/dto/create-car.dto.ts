import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
    // Personalizar mensaje de error
    @IsString({message: `The brand most be a cool string`})
    readonly brand: string;

    @IsString()
    @MinLength(3, {message: 'Deberia tener al menos 3 letras'})
    readonly model: string;
}