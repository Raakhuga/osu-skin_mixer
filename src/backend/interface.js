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
        });
    }

    loadCursor(dict, path) {
        let keys = Object.keys(dict);
        keys.map((key) => {
            this._cursor.fillWith(key, dict[key]['x1'], path, 'SS', 'auth');
            this._cursor.fillWith(key, dict[key]['x2'], path, 'SS', 'auth', true);
        });
    }

    loadModIcon(dict, path) {
        let keys = Object.keys(dict);
        keys.map((key) => {
            this._modIcon.fillWith(key, dict[key]['x1'], path, 'SS', 'auth');
            this._modIcon.fillWith(key, dict[key]['x2'], path, 'SS', 'auth', true);
        });
    }

    loadOffsetWizard(dict, path) {
        let keys = Object.keys(dict);
        keys.map((key) => {
            this._offsetWizard.fillWith(key, dict[key]['x1'], path, 'SS', 'auth');
            this._offsetWizard.fillWith(key, dict[key]['x2'], path, 'SS', 'auth', true);
        });
    }

    loadPlayField(playFieldDict, countDownDict, hitBurstsDict, inputOverlayDict, pauseScreenDict, scoreBarDict, scoreNumbersDict, path) {
        let keys = Object.keys(playFieldDict);
        keys.map((key) => {
            this._playField.fillWith(key, playFieldDict[key]['x1'], path, 'SS', 'auth');
            this._playField.fillWith(key, playFieldDict[key]['x2'], path, 'SS', 'auth', true);
        });
        this._playField.loadCountDown(countDownDict, path);
        this._playField.loadHitBursts(hitBurstsDict, path);
        this._playField.loadInputOverlay(inputOverlayDict, path);
        this._playField.loadPauseScreen(pauseScreenDict, path);
        this._playField.loadScoreBar(scoreBarDict, path);
        this._playField.loadScoreNumbers(scoreNumbersDict, path);
    }

    loadRankingGrades(dict, path) {
        let keys = Object.keys(dict);
        keys.map((key) => {
            this._rankingGrades.fillWith(key, dict[key]['x1'], path, 'SS', 'auth');
            this._rankingGrades.fillWith(key, dict[key]['x2'], path, 'SS', 'auth', true);
        });
    }

    loadRankingScreen(dict, path) {
        let keys = Object.keys(dict);
        keys.map((key) => {
            this._rankingScreen.fillWith(key, dict[key]['x1'], path, 'SS', 'auth');
            this._rankingScreen.fillWith(key, dict[key]['x2'], path, 'SS', 'auth', true);
        });
    }

    loadScoreEntry(dict, path) {
        let keys = Object.keys(dict);
        keys.map((key) => {
            this._scoreEntry.fillWith(key, dict[key]['x1'], path, 'SS', 'auth');
            this._scoreEntry.fillWith(key, dict[key]['x2'], path, 'SS', 'auth', true);
        });
    }

    loadSongSelection(songSelectionDict, modeSelectDict, path) {
        let keys = Object.keys(songSelectionDict);
        keys.map((key) => {
            this._songSelection.fillWith(key, songSelectionDict[key]['x1'], path, 'SS', 'auth');
            this._songSelection.fillWith(key, songSelectionDict[key]['x2'], path, 'SS', 'auth', true);
        });
        this._songSelection.loadModeSelect(modeSelectDict, path);
    }

}

module.exports = Interface;