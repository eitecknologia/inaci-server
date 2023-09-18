import express, { Application } from 'express';

class App {
    private readonly app: Application;

    constructor() {
        this.app = express();
    }


    getApp(): Application {
        return this.app;
    }

}

export default new App().getApp();