import { Elysia } from "elysia";
import pino from "pino";

export const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
        },
    }
});

export const loggerPlugin = new Elysia({
    name: "logger",
})
    .decorate('log', logger)
    .onBeforeHandle(({ request, path, log }) => {
        const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');
        const method = request.method;

        log.info(`${method} ${path} from ${ip}`);
    });