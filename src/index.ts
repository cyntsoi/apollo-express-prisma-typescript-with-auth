import "reflect-metadata"
import {ApolloServer} from 'apollo-server-express';
import express from 'express'
import createSchema from "./utils/createSchema";

(async () => {
    const app = express();

    const schema = await createSchema()

    const server = new ApolloServer({schema, playground: true})

    server.applyMiddleware({app});

    app.listen({port: 9000}, () => {
        console.log('listening at port 9000')
    })
})()
