/**
 * List which returns random elements, never repeating.
 */
export class RandomList {

    /**
     * Elements list.
     *
     * @var array
     */
    protected list: Array<any>;

    /**
     * Elements previously used.
     *
     * @var array
     */
    protected used: Array<any>;

    /**
     * Number of times a element won't be repeated.
     *
     * @var int
     */
    protected turns = 1;

    /**
     * Constructor.
     *
     * @param array list
     *   List of elements.
     */
    constructor(list) {
        this.list = list;
        this.used = [];
    }

    /**
     * Get random element from list.
     *
     * @return any
     *   Random element.
     */
    public randomElement() {
        return this.list[this.randomElementKey()];
    }

    /**
     * Get random element key from list.
     *
     * @return any
     *   Random element.
     */
    public randomElementKey() {
        this.free();
        let element = this.getRandomElement();
        this.record(element);
        return element;
    }

    /**
     * Process random element from list.
     *
     * @return any
     *   Random element.
     */
    public getRandomElement() {
        let valid = false;
        let element = null;
        while (!valid) {
           element = Math.floor(Math.random() * this.getLength());
           valid = !this.isUsed(element);
        }
        return element;
    }

    /**
     * Check element is used previously.
     *
     * @return bool
     *   Element is used previously?
     */
    public isUsed(element) {
        return this.used.indexOf(element) >= 0;
    }

    /**
     * Record element has been used.
     *
     * @param int element
     *   Element key.
     */
    public record(element) {
        this.used.push(element);
    }

    /**
     * Free elements used when there are more than needed.
     */
    public free() {
        if (this.used.length > this.turns) {
            this.used.shift();
        }
    }

    /**
     * Get list length.
     */
    public getLength() {
        return this.list.length;
    }

}
