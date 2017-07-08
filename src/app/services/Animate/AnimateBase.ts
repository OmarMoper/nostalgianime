import {AnimateInterface} from './AnimateInterface'
import {RandomList} from '../List/RandomList';

export abstract class AnimateBase implements AnimateInterface {

    protected currentElement;
    protected currentAnimation;
    protected list;
    protected animationList: RandomList;
    protected animate;
    protected selector;

    constructor() {
        this.animationList = new RandomList(this.getAnimationsShowList());
    }

    public setSelector(selector) {
        this.selector = selector;
    }

    public setList(list) {
        this.list = list;
    }

    public enable() {
        this.animate = true;
    }

    public getCurrentElement() {
        return this.currentElement;
    }
    
    public restartCurrentElement() {
        this.currentElement = null;
    }
    
    abstract setupCurrentElement();

    public currentElementActive() {
        return this.getCurrentElement() != null;
    }

    async hideCurrentElement() {
        $(this.selector + ':nth-child(' + this.getCurrentElement() + ')')
            .removeClass('na-animated')
            .removeClass(this.getCurrentAnimation())
            .addClass('hide');
    }

    public showCurrentElement() {
        $(this.selector + ':nth-child(' + this.getCurrentElement() + ')').removeClass('hide');
    }
    
    public animateCurrentElement() {
        $(this.selector + ':nth-child(' + this.getCurrentElement() + ')').addClass('na-animated');
        $(this.selector + ':nth-child(' + this.getCurrentElement() + ')').addClass(this.getCurrentAnimation());
    }

    async initializeAnimate() {
        await this.sleep(200);
        this.animationLoop();
    }

    async animationLoop() {
        while (this.animate) {
            this.setupCurrentElement();
            this.showCurrentElement();
            this.setAnimation();
            this.animateCurrentElement();
            await this.sleep(1000);
        }
    }

    public getCurrentAnimation() {
        return this.currentAnimation;
    }

    public getAnimationsShowList() {
        return [
            'na-pulse',
            'na-fadeInDown',
            'na-fadeInUp',
            'na-flipInX',
            'na-flipInY',
            'na-lightSpeedIn'
        ];
    }

    public getLength() {
        return this.list.length;
    }

    sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public setAnimation() {
        this.currentAnimation = this.getAnimation();
    }

    public getAnimation() {
        let element = this.animationList.randomElement();
        return element;
    }

}
