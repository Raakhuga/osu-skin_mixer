const Base = require('../base/base.js');

class HitBursts extends Base {
    constructor() {
        super();
        this._elems = {
            'hit0': null,
            'hit50': null,
            'hit100': null,
            'hit100k': null,
            'hit300': null,
            'hit300g': null,
            'hit300k': null
        };
    }

    get hit0() {
        return this._elems['hit0'];
    }

    set hit0(component) {
        this._elems['hit0'] = component;
    }

    get hit50() {
        return this._elems['hit50'];
    }

    set hit50(component) {
        this._elems['hit50'] = component;
    }

    get hit100() {
        return this._elems['hit100'];
    }

    set hit100(component) {
        this._elems['hit100'] = component;
    }

    get hit100k() {
        return this._elems['hit100k'];
    }

    set hit100k(component) {
        this._elems['hit100k'] = component;
    }

    get hit300() {
        return this._elems['hit300'];
    }

    set hit300(component) {
        this._elems['hit300'] = component;
    }

    get hit300g() {
        return this._elems['hit300g'];
    }

    set hit300g(component) {
        this._elems['hit300g'] = component;
    }

    get hit300k() {
        return this._elems['hit300k'];
    }

    set hit300k(component) {
        this._elems['hit300k'] = component;
    }
}

module.exports = HitBursts;