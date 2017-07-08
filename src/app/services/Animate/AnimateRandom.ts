import {AnimateBase} from './AnimateBase';
import {RandomList} from '../List/RandomList';
export class AnimateRandom extends AnimateBase {
    
    protected list: RandomList;

    public setList(list) {
        this.list = new RandomList(list);
    }

    public setupCurrentElement() {
        if (this.currentElementActive()) {
            this.hideCurrentElement();
        }
        this.setRandomElement();
    }

    public setRandomElement() {
        this.currentElement = this.getRandomElement();
    }

    /**
     * Get random element from list.
     *
     * @NOTE: allways increment because nth-child starts from 1, and we
     * are getting values from list.
     */
    public getRandomElement() {
        return this.list.randomElementKey() + 1;
    }

}
