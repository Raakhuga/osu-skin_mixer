const Base = require('../base/base.js');

class Cursor extends Base {
    constructor() {
        super();
        this._elems = {
            'cursor': null,
            'cursormiddle': null,
            'cursor-smoke': null,
            'cursortrail': null
        };
    }

    get cursor() {
        return this._elems['cursor'];
    }

    set cursor(component) {
        this._elems['cursor'] = component;
    }

    get cursormiddle() {
        return this._elems['cursormiddle'];
    }

    set cursormiddle(component) {
        this._elems['cursormiddle'] = component;
    }

    get cursorSmoke() {
        return this._elems['cursor-smoke'];
    }

    set cursorSmoke(component) {
        this._elems['cursor-smoke'] = component;
    }

    get cursortrail() {
        return this._elems['cursortrail'];
    }

    set cursortrail(component) {
        this._elems['cursortrail'] = component;
    }
}

module.exports = Cursor;