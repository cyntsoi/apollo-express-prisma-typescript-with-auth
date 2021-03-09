import { Field, ArgsType } from 'type-graphql'
import { IsEmail, Length } from 'class-validator'
import User from './User'
import { IsEmailAlreadyExist } from '../validators/IsEmailAlreadyExist'
import { IsUserAlreadyExist } from '../validators/isUserAlreadyExist'

@ArgsType()
export class SignInArgs implements Partial<User>{
    @Field()
    @IsUserAlreadyExist()
    username: string

    @Field()
    @IsEmail()
    @IsEmailAlreadyExist()
    email: string

    @Field()
    @Length(8, 255)
    password: string
}