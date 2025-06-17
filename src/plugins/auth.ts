import { Elysia } from "elysia";
import jwt from "@elysiajs/jwt";
import {JWT_ACCESS_EXPIRATION, JWT_ACCESS_SECRET, JWT_REFRESH_EXPIRATION, JWT_REFRESH_SECRET} from "../config/env";

export const authPlugin = new Elysia({
    name: 'auth',
})
    .use(jwt({
        name: 'accessJwt',
        secret: JWT_ACCESS_SECRET,
        exp: JWT_ACCESS_EXPIRATION,
    }))
    .use(jwt({
        name: 'refreshJwt',
        secret: JWT_REFRESH_SECRET,
        exp: JWT_REFRESH_EXPIRATION,
    }))
    .derive(async ({ accessJwt, headers }) => {
        const authHeader = headers.authorization;
        const token = authHeader?.startsWith('Bearer ')
            ? authHeader.split(' ')[1]
            : undefined;

        if (!token) return { user: null };

        const payload = await accessJwt.verify(token);
        return {
            user: payload ?? null
        };
    });