import "reflect-metadata"
import {ApolloServer} from 'apollo-server-express';
import express from 'express'
import createSchema from "./utils/createSchema";
import context from "./utils/createContext";

(async () => {
    const app = express();

    const apolloConfig = {
        schema: await createSchema(),
        context,
        playground: true,
    }

    const server = new ApolloServer(apolloConfig)

    server.applyMiddleware({app});

    app.listen({port: 9000}, () => {
        console.log('listening at port 9000')
    })
})()
