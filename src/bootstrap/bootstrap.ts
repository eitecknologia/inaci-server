export interface Bootstrap {
    initialize(): Promise<boolean | Error>;
    close(): Promise<void>;
}