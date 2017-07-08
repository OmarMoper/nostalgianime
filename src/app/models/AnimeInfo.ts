import  {ApiEntity} from './ApiEntity'

export class AnimeInfo extends ApiEntity {

    public getTitle() {
        return this.getProperty('title')
    }

    public getDescription() {
        return this.getProperty('description')
    }

    public getPicture() {
        return this.getProperty('image')
    }
}