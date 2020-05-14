const Element = require('../base/element.js');
const { join } = require('path')

class Cursor {
    constructor() {
        this._elems = {
            'cursor.png': null,
            'cursormiddle.png': null,
            'cursor-smoke.png': null,
            'cursortrail.png': null
        };
    }

    fillWith(file, path) {
        this._elems[file] = new Element(join(path, file), false);
    }
}

module.exports = Cursor;