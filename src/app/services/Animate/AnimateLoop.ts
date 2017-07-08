import {AnimateBase} from './AnimateBase';
export class AnimateLoop extends AnimateBase {
    
    public setupCurrentElement() {
        if (this.currentElementActive()) {
            this.hideCurrentElement();
            this.setupNextElement();
        }
        else {
            this.initCurrentElement();
        }
    }

    public initCurrentElement() {
        this.currentElement = 1;
    }

    public setupNextElement() {
        if (this.hasToRestart()) {
            this.initCurrentElement();
        }
        else {
            this.forwardElement();
        }
    }

    public hasToRestart() {
        return this.currentElement == this.getLength();
    }

    public forwardElement() {
        this.currentElement++;
    }
}
