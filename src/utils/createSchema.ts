import {buildSchema, BuildSchemaOptions} from "type-graphql";

const options: BuildSchemaOptions = {
    resolvers: [ __dirname + "../../modules/**/resolvers/*.ts"],
    dateScalarMode: "timestamp",
}

export default () => buildSchema(options)