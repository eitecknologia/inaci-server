import app from './app';
import dotenv from 'dotenv';
import { Bootstrap } from './bootstrap/bootstrap';
import { ServerBootstrap } from './bootstrap/Server.bootstrap';

dotenv.config();

const server: Bootstrap = new ServerBootstrap(app);

(async () => {
    try {
        const promises: Array<Promise<boolean | Error>> = [
            server.initialize()
        ];

        await Promise.all(promises);

    } catch (error: (NodeJS.ErrnoException | Error | any)) {
        console.error(error);
        server.close();
    }
})();