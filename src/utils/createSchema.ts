import {AuthChecker, buildSchema, BuildSchemaOptions} from "type-graphql";
import {Context} from "./context";
import getCurrentUserFromContext from "../modules/user/utils/getCurrentUserFromContext";
import enhanceSchema from "./enhanceSchema";
import userResolvers from "../modules/user/resolvers"
import {UserRole} from "../__generated__/enums";

// apply middleware to generated schemas
enhanceSchema()

const authChecker : AuthChecker<Context> = async (
    { context },
    roles
) => {
    const user = await getCurrentUserFromContext(context)

    // return false if not logged in
    if (!user) return false;

    if (roles.length > 0){
        return roles.indexOf(user.role) !== -1
    }

    // more validation logic here
    return true;
}

const options: BuildSchemaOptions = {
    resolvers: [ ...userResolvers] as any,
    authChecker,
    dateScalarMode: "timestamp",
}

export default async () => await buildSchema(options)