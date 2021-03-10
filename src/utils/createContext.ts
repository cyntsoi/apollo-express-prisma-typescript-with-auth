import { PrismaClient } from '@prisma/client';
import {Request, Response} from 'express';
import prisma from "./prisma"

export interface Context {
    prisma: PrismaClient
    req: Request
    res: Response
}

export default ({req, res}: Pick<Context, "req" | "res">): Context => ({
    prisma,
    req,
    res
})