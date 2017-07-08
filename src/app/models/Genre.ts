import  {KitsuApiEntity} from './KitsuApiEntity'
/**
 * Genre info.
 */
export class Genre extends KitsuApiEntity {

    /**
     * Get name.
     */
    public getName():string {
        return this.getRawPropertyAttribute('name')
    }
    
    /**
     * Get description.
     */
    public getDescription():string {
        return this.getRawPropertyAttribute('description')
    }

    /**
     * Get slug.
     */
    public getSlug():string {
        return this.getRawPropertyAttribute('slug')
    }

}
