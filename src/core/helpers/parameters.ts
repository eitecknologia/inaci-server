export class Parameters {
    static get PORT(): number {
        return Number(process.env.PORT) || 8002;
    }
}