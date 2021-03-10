import {Ctx, Mutation, Resolver} from "type-graphql";
import {Context} from "../../../utils/context";

@Resolver()
export class LogoutUserResolver{
    @Mutation(()=>Boolean)
    async logoutUser(@Ctx() {req}: Context){
        req.session.destroy((err) => {console.log(err)})
        return true;
    }
}