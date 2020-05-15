const Base = require('../base/base.js');

class ScoreNumbers extends Base {
    constructor() {
        super();
        this._elems = {
            'score-0': null,
            'score-1': null,
            'score-2': null,
            'score-3': null,
            'score-4': null,
            'score-5': null,
            'score-6': null,
            'score-7': null,
            'score-8': null,
            'score-9': null,
            'score-comma': null,
            'score-dot': null,
            'score-percent': null,
            'score-x': null
        };
    }

    get score0() {
        return this._elems['score-0'];
    }

    set score0(component) {
        this._elems['score-0'] = component;
    }

    get score1() {
        return this._elems['score-1'];
    }

    set score1(component) {
        this._elems['score-1'] = component;
    }

    get score2() {
        return this._elems['score-2'];
    }

    set score2(component) {
        this._elems['score-2'] = component;
    }

    get score3() {
        return this._elems['score-3'];
    }

    set score3(component) {
        this._elems['score-3'] = component;
    }

    get score4() {
        return this._elems['score-4'];
    }

    set score4(component) {
        this._elems['score-4'] = component;
    }

    get score5() {
        return this._elems['score-5'];
    }

    set score5(component) {
        this._elems['score-5'] = component;
    }

    get score6() {
        return this._elems['score-6'];
    }

    set score6(component) {
        this._elems['score-6'] = component;
    }

    get score7() {
        return this._elems['score-7'];
    }

    set score7(component) {
        this._elems['score-7'] = component;
    }

    get score8() {
        return this._elems['score-8'];
    }

    set score8(component) {
        this._elems['score-8'] = component;
    }

    get score9() {
        return this._elems['score-9'];
    }

    set score9(component) {
        this._elems['score-9'] = component;
    }

    get comma() {
        return this._elems['score-comma'];
    }

    set comma(component) {
        this._elems['score-comma'] = component;
    }

    get dot() {
        return this._elems['score-dot'];
    }

    set dot(component) {
        this._elems['score-dot'] = component;
    }

    get percent() {
        return this._elems['score-percent'];
    }

    set percent(component) {
        this._elems['score-percent'] = component;
    }

    get scoreX() {
        return this._elems['score-x'];
    }

    set scoreX(component) {
        this._elems['score-x'] = component;
    }
}

module.exports = ScoreNumbers;