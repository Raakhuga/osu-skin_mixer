const Button = require('./interface/button.js');
const Cursor = require('./interface/cursor.js');
const ModIcons = require('./interface/modIcons.js');
const OffsetWizard = require('./interface/offsetWizard.js');
const PlayField = require('./interface/playField.js');
const RankingGrades = require('./interface/rankingGrades.js');
const RankingScreen = require('./interface/rankingScreen.js');
const ScoreEntry = require('./interface/scoreEntry.js');
const songSelection = require('./interface/songSelection.js');

class Interface {
    constructor() {
        this._button = new Button();
        this._cursor = new Cursor();
        this._modIcon = new ModIcons();
        this._offsetWizard = new OffsetWizard;
        this._playField = new PlayField();
        this._rankingGrades = new RankingGrades();
        this._rankingScreen = new RankingScreen();
        this._scoreEntry = new ScoreEntry();
        this._songSelection = new songSelection();
    }


    // Expects dictionary of type:
    /*
    {
        'key': {
            'x1': [],
            'x2': []
        }
    }
    */
    loadButton(dict, path) { 
        let keys = Object.keys(dict);
        keys.map((key) => {
            this._button.fillWith(key, dict[key]['x1'], path, 'SS', 'auth');
            this._button.fillWith(key, dict[key]['x2'], path, 'SS', 'auth', true);
        })
    }
}

module.exports = Interface;