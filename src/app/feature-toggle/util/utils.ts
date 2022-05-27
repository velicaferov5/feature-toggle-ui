import { DatePipe } from "@angular/common";

export class Utils {
    public static formatDate(date: Date): string {
        if (date === null) {
            return "";
        } else {
            const pipe = new DatePipe('en-US');
            return pipe.transform(date, 'dd-MM-yyyy h:mm') || date.toDateString();
        };
    }
}