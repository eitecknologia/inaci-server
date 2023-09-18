import { NextFunction, Request, Response } from "express";
import { IError } from "../error/error.interface";

export class HandleErrors {
    static notFound(_req: Request, _res: Response, next: NextFunction) {
        const err: IError = new Error();
        err.ok = false;
        err.message = "No encontrado";
        err.status = 404;

        next(err);
    }

    static generic(err: IError, _req: Request, res: Response, _next: NextFunction) {
        const messageError: Record<string, any> = {
            ok: false,
            status: err.status || 500,
            name: err.name || "Server Error",
            message: err.message || "Internal Server Error",
        }

        if (process.env.NODE_ENV === "development") {
            messageError.stack = err.stack || "Internal Server Error";
        }

        return res.status(err.status || 500).json(messageError);
    }
}