import  {KitsuApiEntity} from './KitsuApiEntity'
import {StreamingLink} from './StreamingLink';
import {Mapping} from './Mapping';
import {Genre} from './Genre';

/**
 * Genre info.
 */
export class Anime extends KitsuApiEntity {

    /**
     * Get name.
     */
    public getTitle():string {
        return this.getRawPropertyAttribute('canonicalTitle')
    }
    
    /**
     * Get description.
     */
    public getDescription(length = 0):string {
        let synopsis: string = this.getRawPropertyAttribute('synopsis'), description = synopsis
        if (length > 0) {
            let words_split = synopsis.split(/\s+/, length);
            description = words_split.length == length ? words_split.join(' ') + '...' : words_split.join(' ');
        }
        return description;
    }

    public getCoverList() {
        return this.getRawPropertyAttribute('coverImage');
    }

    public hasCover() {
        return this.getRawPropertyAttribute('coverImage') != null;
    }

    public getCover(style) {
        let imageStyles= this.getCoverList();
        return this.hasCover() ? this.getImageStyle(imageStyles, style) : this.getCoverDefault();
    }

    public getCoverDefault() {
        return '../../../assets/img/default/default_cover.png';
    }

    public getPosterList() {
        return this.getRawPropertyAttribute('posterImage')
    }

    public getPoster(style): string {
        var imageStyles = this.getPosterList()
        return this.getImageStyle(imageStyles, style);
    }

    public getImageStyle(imageList, style) {
        return imageList != null && typeof(imageList[style]) != 'undefined' && imageList[style] != null? imageList[style] : null;
    }

    public getYoutubeVideoId() {
        return this.getRawPropertyAttribute('youtubeVideoId');
    }

    public getRating() {
        return this.getRawPropertyAttribute('averageRating');
    }

    public getSlug() {
        return this.getRawPropertyAttribute('slug');
    }

    public getRatingFormatted() {
        let rating = this.getRating();
        return (Math.ceil(rating) / 10).toFixed(1);
    }

    public getRatingClass() {
        let rating = this.getRating();
        let rating_text = '';
        if (rating > 70) {
            rating_text = 'nice';
        }
        else if (rating > 50) {
            rating_text = 'notbad'
        }
        else {
            rating_text = 'underrated';
        }
        return rating_text;
    }

    public getStartDate() {
        return this.getRawPropertyAttribute('startDate')
    }

    public getYear() {
        return this.getStartDate().split('-')[0];
    }

    public getGenres() {
        let categories = this.getRelationshipEntities('genres'), categoriesList = [];
        categories.forEach(function(streamingLink, index, array) {
            categoriesList.push(new Genre(streamingLink));
        })
        return categoriesList;
    }

    public getStreamingLinks() {
        let streamingLinks = this.getRelationshipEntities('streamingLinks'), streamingLinksList = [];
        streamingLinks.forEach(function(streamingLink, index, array) {
            streamingLinksList.push(new StreamingLink(streamingLink));
        })
        return streamingLinksList;
    }

    public getMappings() {
        let mappings = this.getRelationshipEntities('mappings'), mappingList = [];
        mappings.forEach(function(mapping, index, array) {
            if (typeof(mapping.attributes.externalSite) != 'undefined' && mapping.attributes.externalSite != 'thetvdb/season') {
                mappingList.push(new Mapping(mapping));
            }
        })
        return mappingList;
    }

    public getPosterDefault() {
        return '../../../assets/img/default/animeteasernotfound.jpg';
    }
}
