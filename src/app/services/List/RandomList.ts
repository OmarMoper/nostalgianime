export class RandomList {
    
    protected list: Array<any>;
    protected used: Array<any>;
    protected turns = 2;

    constructor(list) {
        this.list = list;
        this.used = [];
    }

    public randomElement() {
        return this.list[this.randomElementKey()];
    }

    public randomElementKey() {
        this.free();
        let element = this.getRandomElement();
        this.record(element);
        return element;
    }

    public getRandomElement() {
        let valid = false;
        let element = null;
        while (!valid) {
           element = Math.floor(Math.random() * this.getLength());
           valid = !this.isUsed(element);
        }
        return element;
    }

    public isUsed(element) {
        return this.used.indexOf(element) >= 0;
    }

    public record(element) {
        this.used.push(element);
    }

    public free() {
        if (this.used.length > this.turns) {
            this.used.shift();
        }
    }

    public getLength() {
        return this.list.length;
    }

}
