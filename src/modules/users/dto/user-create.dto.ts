import { IsInt, IsNotEmpty, MaxLength } from "class-validator";

export class UsersCreateDto {

    @MaxLength(255, {message: "O tamanho para o nome não pode ser maior"})
    @IsNotEmpty({message: "Não pode ser Vazio"})
    name: string;

    @IsInt({message: "Este campo é numerico"})
    @IsNotEmpty({message: "CPF não pode ser vazio"})
    cpf: number;

    @IsNotEmpty({message: "Email não pode ser vazio"})
    email: string;
    
    @IsNotEmpty({message: "Password não pode ser vazio"})
    password: string;

}
