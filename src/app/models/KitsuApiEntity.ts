import {ApiEntity} from './ApiEntity'

export interface KitsuApiEntityInterface {
    getType();
}

export class KitsuApiEntity extends ApiEntity implements KitsuApiEntityInterface {

    public getType() {
        return this.getProperty('type');
    }

    protected getRawPropertyAttribute(attribute) {
        return this.getProperty('attributes')[attribute]
    }

    public getIdentifier() {
        return this.getProperty('id')
    }

    public getIncluded() {
        return this.getProperty('included')
    }

    public getRelationships() {
        return this.getProperty('relationships')
    }

    public getRelationship(reltype) {
        let relationships = this.getRelationships()
        return typeof(relationships[reltype]) != 'undefined' ? relationships[reltype] : null;
    }

    public getIncludedEntity(id, included = null) {
        if (included == null) {
            included = this.getIncluded()
        }
        let entity = null
        for (let i = 0; i < included.length; i++) {
            if (included[i].id == id) {
                entity = included[i]
                break;
            }
        }
        return entity != null ? entity : null;
    }

    public getRelationshipEntities(reltype, entity = null) {
        let relationship = null;
        if (entity == null) {
            relationship = this.getRelationship(reltype);
        }
        else {
            relationship = entity.getRelationship(reltype);
        }
        let entities = [];
        if (typeof(relationship.data) != 'undefined') {
            for (let i = 0; i < relationship.data.length; i++) {
                entities.push(this.getIncludedEntity(relationship.data[i].id))
            }
        }
        return entities;
    }

}
