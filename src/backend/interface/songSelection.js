const Base = require('../base/base.js');
const ModeSelect = require('./modeSelect.js');

class SongSelection extends Base {
    constructor() {
        super();
        this._modeSelect = new ModeSelect();
        this._elems = {
            'menu-back': null,
            'menu-button-background': null,
            'selection-mode': null,
            'selection-mode-over': null,
            'selection-mods': null,
            'selection-mods-over': null,
            'selection-random': null,
            'selection-random-over': null,
            'selection-options': null,
            'selection-options-over': null,
            'selection-tab': null,
            'star': null,
            'star2': null
        };
    }

    get menuBack() {
        return this._elems['menu-back'];
    }

    set menuBack(component) {
        this._elems['menu-back'] = component;
    }

    get menuButtonBackground() {
        return this._elems['menu-button-background'];
    }

    set menuButtonBackground(component) {
        this._elems['menu-button-background'] = component;
    }

    get selectionMode() {
        return this._elems['selection-mode'];
    }

    set selectionMode(component) {
        this._elems['selection-mode'] = component;
    }

    get selectionModeOver() {
        return this._elems['selection-mode-over'];
    }

    set selectionModeOver(component) {
        this._elems['selection-mode-over'] = component;
    }

    get selectionMods() {
        return this._elems['selection-mods'];
    }

    set selectionMods(component) {
        this._elems['selection-mods'] = component;
    }

    get selectionModsOver() {
        return this._elems['selection-mods-over'];
    }

    set selectioModsOver(component) {
        this._elems['selection-mods-over'] = component;
    }

    get selectionRandom() {
        return this._elems['selection-random'];
    }

    set selectionRandom(component) {
        this._elems['selection-random'] = component;
    }

    get selectionRandomOver() {
        return this._elems['selection-random-over'];
    }

    set selectionRandomOver(component) {
        this._elems['selection-random-over'] = component;
    }

    get selectionOptions() {
        return this._elems['selection-options'];
    }

    set selectionOptions(component) {
        this._elems['selection-options'] = component;
    }

    get selectionOptionsOver() {
        return this._elems['selection-options-over'];
    }

    set selectionOptionsOver(component) {
        this._elems['selection-options-over'] = component;
    }

    get selectionTab() {
        return this._elems['selection-tab'];
    }

    set selectionTab(component) {
        this._elems['selection-tab'] = component;
    }

    get star() {
        return this._elems['star'];
    }

    set star(component) {
        this._elems['star'] = component;
    }

    get star2() {
        return this._elems['star2'];
    }

    set star2(component) {
        this._elems['star2'] = component;
    }
}

module.exports = SongSelection;