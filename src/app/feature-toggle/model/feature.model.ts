export class Feature {
    id?: number;
    displayName?: string;
    technicalName?: string;
    description?: string;
    expiresOn?: Date;
    inverted: boolean = false;
    customerIds?: string;
}