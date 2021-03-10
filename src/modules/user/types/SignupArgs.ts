import { Field, InputType } from 'type-graphql'
import { IsEmail, Length } from 'class-validator'
import { IsEmailAlreadyExist } from '../validators/IsEmailAlreadyExist'
import { IsUserAlreadyExist } from '../validators/isUserAlreadyExist'
import User from "../types/User";

@InputType()
export class SignupArgs implements Partial<User>{
    @Field()
    @IsUserAlreadyExist({message: "User already exists!"})
    username: string

    @Field()
    @IsEmail()
    @IsEmailAlreadyExist({message: "Email already exists!"})
    email: string

    @Field()
    @Length(8, 255)
    password: string
}