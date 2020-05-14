const Button = require('./interface/button.js');
const Cursor = require('./interface/cursor.js');
const ModIcons = require('./interface/modIcons.js');

class Interface {
    constructor() {
        this._button = new Button();
        this._cursor = new Cursor();
        this._modIcon = new ModIcons();
        this._offsetWizard = null;
        this._playField = new this._playField();
    }
}

module.exports = Interface;