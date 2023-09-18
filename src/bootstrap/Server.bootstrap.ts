import { Application } from "express";
import { Bootstrap } from "./bootstrap";
import http from 'http';
import { Parameters } from "../core/helpers/parameters";
import logger from "../core/helpers/logger";

export class ServerBootstrap implements Bootstrap {

    constructor(private readonly app: Application) {}

    async initialize(): Promise<boolean | Error> {
        return new Promise((resolve, reject) => {
            const server = http.createServer(this.app);
            
            server
                .listen(Parameters.PORT)
                .on('listening', () => {
                    logger.info(`Server is listening on port ${Parameters.PORT}`);
                    resolve(true);
                })
                .on('error', (error: Error) => {
                    console.error(error);
                    reject(error);
                });
        });
    }


    async close(): Promise<void> {
        process.exit(0);
    }

}