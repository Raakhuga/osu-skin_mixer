const Base = require('../base/base.js');

class Button extends Base {
    
    // Given the list of names (string) of the files of a skin creates its button component.
    constructor() {
        super();
        this._elems = {
            'button-left': null, 
            'button-middle': null, 
            'button-right': null
        }
    }

    get left() {
        return this._elems['button-left'];
    }

    get middle() {
        return this._elems['button-middle'];
    }

    get right() {
        return this._elems['button-rigth'];
    }

    set left(elem) {
        this._elems['button-left'] = elem;
    }

    set middle(elem) {
        this._elems['button-middle'] = elem;
    }

    set right(elem) {
        this._elems['button-right'] = elem;
    }
}

module.exports = Button