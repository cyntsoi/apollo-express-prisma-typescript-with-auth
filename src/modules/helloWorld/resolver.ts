import {Query, Resolver} from "type-graphql";

@Resolver()
export class HelloWorld{
    @Query(() => String)
    async hello() : Promise<string>{
        return "hello world!"
    }
}