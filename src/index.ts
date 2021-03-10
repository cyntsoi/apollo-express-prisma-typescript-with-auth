import "reflect-metadata"
import {ApolloServer} from 'apollo-server-express';
import express from 'express'
import createSchema from "./utils/createSchema";
import context from "./utils/createContext";
import session from "express-session"
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import prisma from "./utils/prisma"

(async () => {
    const app = express()

    app.use(session({
        store: new PrismaSessionStore(
            prisma,
            {
                checkPeriod: 2 * 60 * 1000,  //ms
                dbRecordIdIsSessionId: true,
                dbRecordIdFunction: undefined,
            }
        ),
        secret: 'secret$%^134',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 1000 * 60 * 10
        }
    }))

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
