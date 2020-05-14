const Element = require('../base/element.js');
const { join } = require('path');
//const Base = require('../base/base.js');

class Button {
    
    // Given the list of names (string) of the files of a skin creates its button component.
    constructor() {
        this._elems = {
            'button-left.png': null, 
            'button-middle.png': null, 
            'button-right.png': null
        }
    }

    fillWith(file, path) {
        this._elems[file] = new Element(join(path, file), false);
    }

    get left() {
        return this._elems[left];
    }

    get middle() {
        return this._elems[middle];
    }

    get right() {
        return this._elems[rigth];
    }

    set left(elem) {
        this._elems[left] = elem;
    }

    set middle(elem) {
        this._elems[middle] = elem;
    }

    set right(elem) {
        this._elems[right] = elem;
    }
}

module.exports = Button