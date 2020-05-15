const Base = require('../base/base.js');

class InputOverlay extends Base {
    constructor() {
        super();
        this._elems = {
            'inputoverlay-background': null,
            'inputoverlay-key': null
        };
    }

    get background() {
        return this._elems['inputoverlay-background'];
    }

    set background(component) {
        this._elems['inputoverlay-background'] = component;
    }

    get key() {
        return this._elems['inputoverlay-key'];
    }

    set key(component) {
        this._elems['inputoverlay-key'] = component;
    }
    
}

module.exports = InputOverlay;