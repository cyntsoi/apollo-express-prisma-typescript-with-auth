import {Arg, Mutation, Ctx} from "type-graphql";
import {Context} from "../../../utils/createContext";
import bcrypt from "bcryptjs"
import User from "../types/User";
import {SignupArgs} from "../types/SignupArgs";

export default class SignupResolver {
    @Mutation(() => User, {nullable: true})
    async signupUser(@Arg('data') {password: passwordBeforeHashing, ...args}: SignupArgs, @Ctx() {prisma}: Context) {
        const password = await bcrypt.hash(passwordBeforeHashing, 12)
        return await prisma.user.create(
            {
                data: {password, ...args}
            }) || null
    }
}