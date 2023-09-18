export class HandleDate {

    constructor() { }

    static get currentDateDetails(): String {
        const options: Intl.DateTimeFormatOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        return new Date().toLocaleDateString("es-EC", options);
    }
}