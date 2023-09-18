interface IResponse {
    ok: boolean;
    status: number;
    message: string;
    data?: any;
}

export class HandleResponse {

    static success(res: any, data: any, message = "Success", status: number = 200): void {
        const response: IResponse = {
            ok: true,
            status,
            message,
            data
        };
        return res.status(status).json(response);
    }

}