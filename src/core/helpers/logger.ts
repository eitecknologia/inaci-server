import chalk from "chalk";
import winston from "winston";

interface LoggerOptions {
    [key: string]: chalk.Chalk;
}

const levels: LoggerOptions = {
    error: chalk.red.bold,
    warn: chalk.yellow.bold,
    info: chalk.green.bold,
    debug: chalk.blue.bold
};

const logFormat = winston.format.printf(({ level, message, timestamp }) => {
    const color = levels[level](level.toUpperCase());
    return `${chalk.gray(`[${timestamp}]`)} ${color}: ${chalk.cyan(`[${message}]`)}`;
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.errors({ stack: true }),
        logFormat
    ),
    transports: [
        new winston.transports.Console()
    ]
});

export default logger;