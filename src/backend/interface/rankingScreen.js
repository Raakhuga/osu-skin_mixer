const Base = require('../base/base.js');

class RankingScreen extends Base {
    constructor() {
        super();
        this._elems = {
            'ranking-accuracy': null,
            'ranking-graph': null,
            'ranking-maxcombo': null,
            'ranking-panel': null,
            'ranking-perfect': null,
            'ranking-title': null,
            'ranking-replay': null,
            'ranking-retry': null,
            'ranking-winner': null
        };
    }

    get accuracy() {
        return this._elems['ranking-accuracy'];
    }

    set accuracy(component) {
        this._elems['ranking-accuracy'] = component;
    }

    get graph() {
        return this._elems['ranking-graph'];
    }

    set graph(component) {
        this._elems['ranking-graph'] = component;
    }

    get maxcombo() {
        return this._elems['ranking-maxcombo'];
    }

    set maxcombo(component) {
        this._elems['ranking-maxcombo'] = component;
    }

    get panel() {
        return this._elems['ranking-panel'];
    }

    set panel(component) {
        this._elems['ranking-panel'] = component;
    }

    get perfect() {
        return this._elems['ranking-perfect'];
    }

    set perfect(component) {
        this._elems['ranking-perfect'] = component;
    }

    get title() {
        return this._elems['ranking-title'];
    }

    set title(component) {
        this._elems['ranking-title'] = component;
    }
    get replay() {
        return this._elems['ranking-replay'];
    }

    set replay(component) {
        this._elems['ranking-replay'] = component;
    }
    get retry() {
        return this._elems['ranking-retry'];
    }

    set retry(component) {
        this._elems['ranking-retry'] = component;
    }
    get winner() {
        return this._elems['ranking-winner'];
    }

    set winner(component) {
        this._elems['ranking-winner'] = component;
    }
    
}

module.exports = RankingScreen;