import { Router } from "express";
import { HandleResponse } from "../../core/helpers/response";
import { HandleDate } from "../../core/helpers/date";

class ServerRoute {
    router: Router;

    constructor() {
        this.router = Router();
        this.addRoutes();
    }

    addRoutes(): void {
        this.router.get("/", (_req, res) => {
            HandleResponse.success(res, HandleDate.currentDateDetails, "Server is running ok");
        });
    }

    getRoutes(): Router {
        return this.router;
    }

}

export default new ServerRoute().getRoutes();