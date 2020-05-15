const Base = require('../base/base.js');

class ModeSelect extends Base {
    constructor() {
        super();
        this._elems = {
            'mode-osu': null,
            'mode-taiko': null,
            'mode-fruits': null,
            'mode-mania': null,
            'mode-osu-med': null,
            'mode-taiko-med': null,
            'mode-fruits-med': null,
            'mode-mania-med': null,
            'mode-osu-small': null,
            'mode-taiko-small': null,
            'mode-fruits-small': null,
            'mode-mania-small': null
        };
    }

    get osu() {
        return this._elems['mode-osu'];
    }

    set osu(component) {
        this._elems['mode-osu'] = component;
    }

    get osuMed() {
        return this._elems['mode-osu-med'];
    }

    set osuMed(component) {
        this._elems['mode-osu-med'] = component;
    }

    get osuSmall() {
        return this._elems['mode-osu-small'];
    }

    set osuSmall(component) {
        this._elems['mode-osu-small'] = component;
    }

    get taiko() {
        return this._elems['mode-taiko'];
    }

    set taiko(component) {
        this._elems['mode-taiko'] = component;
    }

    get taikoMed() {
        return this._elems['mode-taiko-med'];
    }

    set taikoMed(component) {
        this._elems['mode-taiko-med'] = component;
    }

    get taikoSmall() {
        return this._elems['mode-taiko-small'];
    }

    set taikoSmall(component) {
        this._elems['mode-taiko-small'] = component;
    }

    get fruits() {
        return this._elems['mode-fruits'];
    }

    set fruits(component) {
        this._elems['mode-fruits'] = component;
    }

    get fruitsMed() {
        return this._elems['mode-fruits-med'];
    }

    set fruitsMed(component) {
        this._elems['mode-fruits-med'] = component;
    }

    get fruitsSmall() {
        return this._elems['mode-fruits-small'];
    }

    set fruitsSmall(component) {
        this._elems['mode-fruits-small'] = component;
    }

    get mania() {
        return this._elems['mode-mania'];
    }

    set mania(component) {
        this._elems['mode-mania'] = component;
    }

    get maniaMed() {
        return this._elems['mode-mania-med'];
    }

    set maniaMed(component) {
        this._elems['mode-mania-med'] = component;
    }

    get maniaSmall() {
        return this._elems['mode-mania-small'];
    }

    set maniaSmall(component) {
        this._elems['mode-mania-small'] = component;
    }
}

module.exports = ModeSelect;