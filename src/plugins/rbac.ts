import { Elysia } from "elysia";

export const rbacPlugin = new Elysia({
    name: 'rbac',
})
    .decorate('requiredRoles', (user: any, role: string | string[]) => {
    if (!user || !user.roles || !user.roles.length) return false;

    const roles = Array.isArray(role) ? role : [role];
    return roles.some(r => user.roles.includes(r));
});