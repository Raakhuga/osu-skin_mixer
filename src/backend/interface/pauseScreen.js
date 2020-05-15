const Base = require('../base/base.js');

class PauseScreen extends Base {
    constructor() {
        super();
        this._elems = {
            'pause-overlay': null,
            'fail-background': null,
            'pause-back': null,
            'pause-continue': null,
            'pause-replay': null,
            'pause-retry': null
        };
    }

    get overlay() {
        return this._elems['pause-overlay'];
    }

    set overlay(component) {
        this._elems['pause-overlay'] = component;
    }

    get failBackground() {
        return this._elems['fail-background'];
    }

    set failBackground(component) {
        this._elems['fail-background'] = component;
    }

    get back() {
        return this._elems['pause-back'];
    }

    set back(component) {
        this._elems['pause-back'] = component;
    }

    get continue() {
        return this._elems['pause-continue'];
    }

    set continue(component) {
        this._elems['pause-continue'] = component;
    }

    get replay() {
        return this._elems['pause-replay'];
    }

    set replay(component) {
        this._elems['pause-replay'] = component;
    }

    get retry() {
        return this._elems['pause-retry'];
    }

    set retry(component) {
        this._elems['pause-retry'] = component;
    }
}

module.exports = PauseScreen;