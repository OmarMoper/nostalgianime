import { Http } from '@angular/http';
import {config} from '../../config'

export abstract class AbstractAPI {

    constructor(protected http: Http) {}

    abstract getEndpoint(): string;

    public getEndpointUrl(): string {
        let url = config('apiUrl') + this.getEndpoint()
        return url;
    }

    public buildUrl(params = null): string {
        return this.getEndpointUrl()
    }
}
