import  {KitsuApiEntity} from './KitsuApiEntity'
import {ExternalLinkInterface} from './ExternalLinkInterface';

/**
 * Genre info.
 */
export class StreamingLink extends KitsuApiEntity implements ExternalLinkInterface {

    public getUrl(): string {
        return this.getRawPropertyAttribute('url');
    }
    
    public getProvider() {
        let matches = this.getUrl().match(/(:http[s]?)?:\/\/(.*\.)?(.*)(\..*)/);
        return matches != null ? matches[3] : false;
    }
}
