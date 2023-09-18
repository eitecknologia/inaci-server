import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { HandleErrors } from './core/helpers/errors';
import serverRoutes from './modules/server/server.routes';

class App {
    private readonly app: Application;
    private readonly prefix: string = "/api";

    constructor() {
        this.app = express();
        this.mountMiddlewares();
        this.mountRoutes();
        this.mountHandleErrors();
    }

    mountMiddlewares(): void {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('combined'));
    }

    mountRoutes(): void {
        this.app.use("/", serverRoutes);
        this.app.use(this.prefix.concat("/user"), serverRoutes);
    }

    mountHandleErrors(): void {
        this.app.use("**", HandleErrors.notFound);
        this.app.use(HandleErrors.generic);
    }

    getApp(): Application {
        return this.app;
    }

}

export default new App().getApp();