import {Arg, Mutation, Ctx, ArgsType, Field} from "type-graphql";
import User from "../types/User";
import {Context} from "../../../utils/createContext";
import bcrypt from "bcryptjs"
import {SignInArgs} from "../types/SignInArgs";

export default class SignInResolver {
    @Mutation(() => User, {nullable: true})
    async registerUser(@Arg('data') {password: passwordBeforeHashing, ...args}: SignInArgs, @Ctx() {prisma}: Context) {
        const password = await bcrypt.hash(passwordBeforeHashing, 12)
        return await prisma.user.create(
            {
                data: {password, ...args}
            }) || null
    }
}