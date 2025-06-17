export const APP_PORT = parseInt(process.env.APP_PORT!) || 3000;
export const DATABASE_URL = process.env.DATABASE_URL!;
export const HASHING_COST = parseInt(process.env.HASHING_COST!) || 12;
export const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET!;
export const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!;
export const JWT_ACCESS_EXPIRATION = process.env.JWT_ACCESS_EXPIRATION!;
export const JWT_REFRESH_EXPIRATION = process.env.JWT_REFRESH_EXPIRATION!
export const LOG_LEVEL = process.env.LOG_LEVEL!;

if(!APP_PORT ||
    !DATABASE_URL ||
    !HASHING_COST ||
    !JWT_ACCESS_SECRET ||
    !JWT_REFRESH_SECRET ||
    !JWT_ACCESS_EXPIRATION ||
    !JWT_REFRESH_EXPIRATION ||
    !LOG_LEVEL) {
    throw new Error('Missing environment variable');
}