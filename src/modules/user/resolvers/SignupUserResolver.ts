import {Arg, Mutation, Ctx, Resolver} from "type-graphql";
import {Context} from "../../../utils/context";
import bcrypt from "bcryptjs"
import User from "../types/User";
import {SignupUserInput} from "../types/SignupUserInput";
import getPrismaFromContext from "../../../utils/getPrismaFromContext";

@Resolver()
export default class SignupUserResolver {
    @Mutation(() => User, {nullable: true})
    async signupUser(@Arg('data') {password: passwordBeforeHashing, ...args}: SignupUserInput, @Ctx() context: Context) {
        const password = await bcrypt.hash(passwordBeforeHashing, 12)

        return await getPrismaFromContext(context).user.create(
            {
                data: {password, ...args}
            }) || null
    }
}