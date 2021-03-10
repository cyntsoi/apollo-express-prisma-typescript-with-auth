import {AuthChecker, buildSchema, BuildSchemaOptions} from "type-graphql";
import {Context} from "./context";
import getCurrentUserFromContext from "../modules/user/utils/getCurrentUserFromContext";
import enhanceSchema from "./enhanceSchema";

// apply middleware to generated schemas
enhanceSchema()

const authChecker : AuthChecker<Context> = async (
    { context },
) => {
    const user = await getCurrentUserFromContext(context)

    // return false if not logged in
    if (!user) return false;

    // more validation logic here
    return true;
}

const options: BuildSchemaOptions = {
    resolvers: [ __dirname + "../../modules/**/resolvers/*.ts"],
    authChecker,
    dateScalarMode: "timestamp",
}

export default async () => await buildSchema(options)