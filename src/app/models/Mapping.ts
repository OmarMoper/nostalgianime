import {KitsuApiEntity} from './KitsuApiEntity'
import {ExternalLinkInterface} from './ExternalLinkInterface';

/**
 * Genre info.
 */
export class Mapping extends KitsuApiEntity implements ExternalLinkInterface {

    public getExternalSite(): string {
        return this.getRawPropertyAttribute('externalSite');
    }

    public getExternalId() {
        return this.getRawPropertyAttribute('externalId');
    }

    public getProvider() {
        return this.getExternalSite().split('/').shift();
    }

    public getName() {
        let provider = this.getProvider(), name;

        switch (provider) {
            case 'anidb':
                name = 'AniDB';
                break;
            case 'thetvdb':
                name = 'TheTVDB';
                break;
            case 'myanimelist':
                name = 'MyAnimeList';
                break;

        }
        return name;
    }

    public getUrl() {
        let provider = this.getProvider(), externalId = this.getExternalId(), url;

        switch (provider) {
            case 'anidb':
                url = '//anidb.net/perl-bin/animedb.pl?show=anime&aid=' + externalId;
                break;
            case 'thetvdb':
                url = '//thetvdb.com/?id=' + externalId + '&tab=series';
                break;
            case 'myanimelist':
                url = '//myanimelist.net/anime/' + externalId;
                break;

        }
        return url;
    }

}
