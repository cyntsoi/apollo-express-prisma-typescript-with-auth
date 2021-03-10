import {Arg, Mutation, Ctx, Resolver} from "type-graphql";
import {Context} from "../../../utils/context";
import User from "../types/User";
import bcrypt from "bcryptjs"
import {LoginUserInput} from "../types/LoginUserInput";
import {AuthenticationError} from "apollo-server-express";
import getCurrentUserFromContext from "../utils/getCurrentUserFromContext";
import getPrismaFromContext from "../../../utils/getPrismaFromContext";

@Resolver()
export default class LoginUserResolver {
    @Mutation(() => User)
    async loginUser(@Arg('data') {identifier, password}: LoginUserInput, @Ctx()context: Context) {
        let user = await getCurrentUserFromContext(context)

        if (user) return user

        user = await getPrismaFromContext(context).user.findFirst({
            where: {
                OR: [
                    {username: identifier},
                    {email: identifier}
                ]
            }
        })

        if (!user || !(await bcrypt.compare(password, user!.password))) {
            throw new AuthenticationError('Invalid username or password.')
        }

        // @ts-ignore
        context.req.session.user = user.id;

        return user
    }
}