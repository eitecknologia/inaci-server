export interface IError extends Error {
    ok?: boolean;
    status?: number;
}