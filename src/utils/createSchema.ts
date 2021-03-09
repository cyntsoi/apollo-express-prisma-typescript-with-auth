import {buildSchema, BuildSchemaOptions} from "type-graphql"

const options: BuildSchemaOptions = {
    resolvers: [__dirname + "../../modules/**/resolver.ts", __dirname + "../../modules/**/*.resolver.ts"],
    dateScalarMode: "timestamp",
}

export default () => buildSchema(options)