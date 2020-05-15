const Base = require('../base/base.js');

class ScoreEntry extends Base {
    constructor() {
        super();
        this._elems = {
            'scoreentry-0': null,
            'scoreentry-1': null,
            'scoreentry-2': null,
            'scoreentry-3': null,
            'scoreentry-4': null,
            'scoreentry-5': null,
            'scoreentry-6': null,
            'scoreentry-7': null,
            'scoreentry-8': null,
            'scoreentry-9': null,
            'scoreentry-comma': null,
            'scoreentry-dot': null,
            'scoreentry-percent': null,
            'scoreentry-x': null,
            'hit300k': null
        };
    }

    get se0() {
        return this._elems['scoreentry-0'];
    }

    set se0(component) {
        this._elems['scoreentry-0'] = component;
    }

    get se1() {
        return this._elems['scoreentry-1'];
    }

    set se1(component) {
        this._elems['scoreentry-1'] = component;
    }

    get se2() {
        return this._elems['scoreentry-2'];
    }

    set se2(component) {
        this._elems['scoreentry-2'] = component;
    }

    get se3() {
        return this._elems['scoreentry-3'];
    }

    set se3(component) {
        this._elems['scoreentry-3'] = component;
    }

    get se4() {
        return this._elems['scoreentry-4'];
    }

    set se4(component) {
        this._elems['scoreentry-4'] = component;
    }

    get se5() {
        return this._elems['scoreentry-5'];
    }

    set se5(component) {
        this._elems['scoreentry-5'] = component;
    }

    get se6() {
        return this._elems['scoreentry-6'];
    }

    set se6(component) {
        this._elems['scoreentry-6'] = component;
    }

    get se7() {
        return this._elems['scoreentry-7'];
    }

    set se7(component) {
        this._elems['scoreentry-7'] = component;
    }

    get se8() {
        return this._elems['scoreentry-8'];
    }

    set se8(component) {
        this._elems['scoreentry-8'] = component;
    }

    get se9() {
        return this._elems['scoreentry-9'];
    }

    set se9(component) {
        this._elems['scoreentry-9'] = component;
    }

    get comma() {
        return this._elems['scoreentry-comma'];
    }

    set comma(component) {
        this._elems['scoreentry-comma'] = component;
    }

    get dot() {
        return this._elems['scoreentry-dot'];
    }

    set dot(component) {
        this._elems['scoreentry-dot'] = component;
    }

    get percent() {
        return this._elems['scoreentry-percent'];
    }

    set percent(component) {
        this._elems['scoreentry-percent'] = component;
    }

    get x() {
        return this._elems['scoreentry-x'];
    }

    set x(component) {
        this._elems['scoreentry-x'] = component;
    }
}

module.exports = ScoreEntry;