export class ApiEntity {
    raw: any
    constructor(data) {
        this.raw = data
    }

    public getRaw() {
        return this.raw;
    }

    public getProperty(property) {
        return typeof(this.raw[property]) != 'undefined' ? this.raw[property] : null
    }
}
