import { Http } from '@angular/http';

const API_URL = 'https://kitsu.io/api/edge';
export abstract class AbstractAPI {

    constructor(protected http: Http) {}

    abstract getEndpoint(): string;

    public getEndpointUrl(): string {
        let url = API_URL + this.getEndpoint()
        return url;
    }

    public buildUrl(params = null): string {
        return this.getEndpointUrl()
    }
}
