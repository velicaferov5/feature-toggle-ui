export class Feature {
    id?: Number;
    displayName?: string;
    technicalName?: string;
    description?: string;
    expiresOn?: Date;
    inverted: boolean = false;
    customerIds?: string;
}