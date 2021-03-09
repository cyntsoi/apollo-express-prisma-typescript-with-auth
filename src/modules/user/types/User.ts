import { ObjectType, Field, ID } from 'type-graphql'
import { IsEmail } from 'class-validator'

@ObjectType()
export default class User {
    @Field((type) => ID)
    id: number

    @Field()
    username: string

    @Field()
    @IsEmail()
    email: string
}