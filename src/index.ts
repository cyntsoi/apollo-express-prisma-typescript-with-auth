require('dotenv').config()

import "reflect-metadata"
import {ApolloServer} from 'apollo-server-express';
import express from 'express'
import createSchema from "./utils/createSchema";
import context from "./utils/context";
import session from "express-session"
import sessionOptions from "./utils/sessionOptions";
import {APP_PORT, IS_PROD} from "./utils/constants";

;(async () => {
    const app = express()

    app.use(session(sessionOptions))

    const server = new ApolloServer(
        {
            schema: await createSchema(),
            context,
            playground: !IS_PROD,
            introspection: !IS_PROD
        }
    )

    server.applyMiddleware({app});

    app.listen({port: APP_PORT}, () => {
        console.log(`Listening at ${APP_PORT}`)
    })
})()
