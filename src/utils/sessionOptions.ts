import {PrismaSessionStore} from "@quixo3/prisma-session-store";
import prisma from "./prisma";
import {IS_PROD} from "./constants";

export default {
    store: new PrismaSessionStore(
        prisma,
        {
            checkPeriod: 2 * 60 * 1000,  //ms
            dbRecordIdIsSessionId: true,
            dbRecordIdFunction: undefined,
        }
    ),
    // assert value exists
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: IS_PROD,
        httpOnly: true,
        maxAge: 1000 * 60 * 10
    }
}