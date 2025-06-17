type APIResponse<T = any> = {
    success: true,
    data: T,
} | APIError;

type APIError = {
    success: false,
    message: string,
    errors?: string,
};

export type { APIResponse, APIError };