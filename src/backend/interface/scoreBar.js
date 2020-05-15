const Base = require('../base/base.js');

class ScoreBar extends Base {
    constructor() {
        super();
        this._elems = {
            'scorebar-bg': null,
            'scorebar-colour': null,
            'scorebar-ki': null,
            'scorebar-kidanger': null,
            'scorebar-kidanger2': null,
            'scorebar-marker': null
        };
    }

    get bg() {
        return this._elems['scorebar-bg'];
    }

    set bg(component) {
        this._elems['scorebar-bg'] = component;
    }

    get colour() {
        return this._elems['scorebar-colour'];
    }

    set colour(component) {
        this._elems['scorebar-colour'] = component;
    }

    get ki() {
        return this._elems['scorebar-ki'];
    }

    set ki(component) {
        this._elems['scorebar-ki'] = component;
    }

    get kidanger() {
        return this._elems['scorebar-kidanger'];
    }

    set kidanger(component) {
        this._elems['scorebar-kidanger'] = component;
    }

    get kidanger2() {
        return this._elems['scorebar-kidanger2'];
    }

    set kidanger2(component) {
        this._elems['scorebar-kidanger2'] = component;
    }

    get marker() {
        return this._elems['scorebar-marker'];
    }

    set marker(component) {
        this._elems['scorebar-marker'] = component;
    }
}

module.exports = ScoreBar;