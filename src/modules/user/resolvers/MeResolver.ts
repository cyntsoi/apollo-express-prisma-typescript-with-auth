import {Ctx, Query, Resolver} from "type-graphql";
import {Context} from "../../../utils/context";
import User from "../types/User";
import getCurrentUserFromContext from "../utils/getCurrentUserFromContext";

@Resolver()
export default class MeResolver {
    @Query(() => User, {nullable: true})
    async me(@Ctx() context: Context) {
        return await getCurrentUserFromContext(context)
    }
}