const Base = require('../base/base.js');

class CountDown extends Base {
    constructor() {
        super();
        this._elems = {
            'count1': null,
            'count2': null,
            'count3': null,
            'go': null,
            'ready': null
        };
    }

    get count1() {
        return this._elems['count1'];
    }

    set count1(component) {
        this._elems['count1'] = component;
    }

    get count2() {
        return this._elems['count2'];
    }

    set count2(component) {
        this._elems['count2'] = component;
    }

    get count3() {
        return this._elems['count3'];
    }

    set count3(component) {
        this._elems['count3'] = component;
    }

    get go() {
        return this._elems['go'];
    }

    set go(component) {
        this._elems['go'] = component;
    }

    get ready() {
        return this._elems['ready'];
    }

    set ready(component) {
        this._elems['ready'] = component;
    }
}

module.exports = CountDown;