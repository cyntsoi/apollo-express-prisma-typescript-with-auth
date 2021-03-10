import { Field, InputType } from 'type-graphql'
import User from "../types/User";

@InputType()
export class LoginUserInput implements Partial<User>{
    @Field()
    identifier: string

    @Field()
    password: string
}