import {
    pgTable,
    serial,
    text,
    timestamp,
    integer,
    primaryKey,
} from 'drizzle-orm/pg-core';
import { roles } from "./roles";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    username: text('username').notNull().unique(),
    password: text('password').notNull(),
    refreshToken: text('refresh_token'),
    createdAt: timestamp('created_at').defaultNow(),
});

export const userRoles = pgTable('user_roles', {
    userId: integer('user_id').notNull().references(() => users.id),
    roleId: integer('role_id').notNull().references(() => roles.id),
}, (table) => ({
    pk: primaryKey({ columns: [table.userId, table.roleId] }),
}));