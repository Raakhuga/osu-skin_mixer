const Base = require('../base/base.js');

class RankingGrades extends Base {
    constructor() {
        super();
        this._elems = {
            'ranking-XH': null,
            'ranking-XH-small': null,
            'ranking-X': null,
            'ranking-X-small': null,
            'ranking-SH': null,
            'ranking-SH-small': null,
            'ranking-S': null,
            'ranking-S-small': null,
            'ranking-A': null,
            'ranking-A-small': null,
            'ranking-B': null,
            'ranking-B-small': null,
            'ranking-C': null,
            'ranking-C-small': null,
            'ranking-D': null,
            'ranking-D-small': null
        };
    }

    get XH() {
        return this._elems['ranking-XH'];
    }

    set XH(component) {
        this._elems['ranking-XH'] = component;
    }

    get XH_Small() {
        return this._elems['ranking-XH-small'];
    }

    set XH_Small(component) {
        this._elems['ranking-XH-small'] = component;
    }

    get X() {
        return this._elems['ranking-X'];
    }

    set X(component) {
        this._elems['ranking-X'] = component;
    }

    get X_Small() {
        return this._elems['ranking-X-small'];
    }

    set X_Small(component) {
        this._elems['ranking-X-small'] = component;
    }

    get SH() {
        return this._elems['ranking-SH'];
    }

    set SH(component) {
        this._elems['ranking-SH'] = component;
    }

    get SH_Small() {
        return this._elems['ranking-SH-small'];
    }

    set SH_Small(component) {
        this._elems['ranking-SH-small'] = component;
    }

    get S() {
        return this._elems['ranking-S'];
    }

    set S(component) {
        this._elems['ranking-S'] = component;
    }

    get S_Small() {
        return this._elems['ranking-S-small'];
    }

    set S_Small(component) {
        this._elems['ranking-S-small'] = component;
    }

    get A() {
        return this._elems['ranking-A'];
    }

    set A(component) {
        this._elems['ranking-A'] = component;
    }

    get A_Small() {
        return this._elems['ranking-A-small'];
    }

    set A_Small(component) {
        this._elems['ranking-A-small'] = component;
    }

    get B() {
        return this._elems['ranking-B'];
    }

    set B(component) {
        this._elems['ranking-B'] = component;
    }

    get B_Small() {
        return this._elems['ranking-B-small'];
    }

    set B_Small(component) {
        this._elems['ranking-B-small'] = component;
    }

    get C() {
        return this._elems['ranking-C'];
    }

    set C(component) {
        this._elems['ranking-C'] = component;
    }

    get C_Small() {
        return this._elems['ranking-C-small'];
    }

    set C_Small(component) {
        this._elems['ranking-C-small'] = component;
    }

    get D() {
        return this._elems['ranking-D'];
    }

    set D(component) {
        this._elems['ranking-D'] = component;
    }

    get D_Small() {
        return this._elems['ranking-D-small'];
    }

    set D_Small(component) {
        this._elems['ranking-D-small'] = component;
    }
}

module.exports = RankingGrades;