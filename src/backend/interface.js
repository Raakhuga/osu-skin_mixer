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
        this._offsetWizard = new OffsetWizard();
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
            'x2': [],
            'sourceSkin': string,
            'author': string
        }
    }
    */
    loadButton(dict, path) { 
        let keys = Object.keys(dict);
        keys.forEach((key) => {
            this._button.fillWith(key, dict[key]['x1'], path, dict[key]['sourceSkin'], dict[key]['author']);
            this._button.fillWith(key, dict[key]['x2'], path, dict[key]['sourceSkin'], dict[key]['author'], true);
        });
    }

    loadCursor(dict, path) {
        let keys = Object.keys(dict);
        keys.forEach((key) => {
            this._cursor.fillWith(key, dict[key]['x1'], path, dict[key]['sourceSkin'], dict[key]['author']);
            this._cursor.fillWith(key, dict[key]['x2'], path, dict[key]['sourceSkin'], dict[key]['author'], true);
        });
    }

    loadModIcon(dict, path) {
        let keys = Object.keys(dict);
        keys.forEach((key) => {
            this._modIcon.fillWith(key, dict[key]['x1'], path, dict[key]['sourceSkin'], dict[key]['author']);
            this._modIcon.fillWith(key, dict[key]['x2'], path, dict[key]['sourceSkin'], dict[key]['author'], true);
        });
    }

    loadOffsetWizard(dict, path) {
        let keys = Object.keys(dict);
        keys.forEach((key) => {
            this._offsetWizard.fillWith(key, dict[key]['x1'], path, dict[key]['sourceSkin'], dict[key]['author']);
            this._offsetWizard.fillWith(key, dict[key]['x2'], path, dict[key]['sourceSkin'], dict[key]['author'], true);
        });
    }

    loadPlayField(playFieldDict, countDownDict, hitBurstsDict, inputOverlayDict, pauseScreenDict, scoreBarDict, scoreNumbersDict, path) {
        let keys = Object.keys(playFieldDict);
        keys.forEach((key) => {
            this._playField.fillWith(key, playFieldDict[key]['x1'], path, playFieldDict[key]['sourceSkin'], playFieldDict[key]['author']);
            this._playField.fillWith(key, playFieldDict[key]['x2'], path, playFieldDict[key]['sourceSkin'], playFieldDict[key]['author'], true);
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
        keys.forEach((key) => {
            this._rankingGrades.fillWith(key, dict[key]['x1'], path, dict[key]['sourceSkin'], dict[key]['author']);
            this._rankingGrades.fillWith(key, dict[key]['x2'], path, dict[key]['sourceSkin'], dict[key]['author'], true);
        });
    }

    loadRankingScreen(dict, path) {
        let keys = Object.keys(dict);
        keys.forEach((key) => {
            this._rankingScreen.fillWith(key, dict[key]['x1'], path, dict[key]['sourceSkin'], dict[key]['author']);
            this._rankingScreen.fillWith(key, dict[key]['x2'], path, dict[key]['sourceSkin'], dict[key]['author'], true);
        });
    }

    loadScoreEntry(dict, path) {
        let keys = Object.keys(dict);
        keys.forEach((key) => {
            this._scoreEntry.fillWith(key, dict[key]['x1'], path, dict[key]['sourceSkin'], dict[key]['author']);
            this._scoreEntry.fillWith(key, dict[key]['x2'], path, dict[key]['sourceSkin'], dict[key]['author'], true);
        });
    }

    loadSongSelection(songSelectionDict, modeSelectDict, path) {
        let keys = Object.keys(songSelectionDict);
        keys.forEach((key) => {
            this._songSelection.fillWith(key, songSelectionDict[key]['x1'], path, songSelectionDict[key]['sourceSkin'], songSelectionDict[key]['author']);
            this._songSelection.fillWith(key, songSelectionDict[key]['x2'], path, songSelectionDict[key]['sourceSkin'], songSelectionDict[key]['author'], true);
        });
        this._songSelection.loadModeSelect(modeSelectDict, path);
    }

    saveButton(path) {
        this._button.save(path);
    }

    saveCursor(path) {
        this._cursor.save(path);
    }

    saveModIcon(path) {
        this._modIcon.save(path);
    }

    saveOffsetWizard(path) {
        this._offsetWizard.save(path);
    }

    savePlayField(path) {
        this._playField.save(path);
    }

    saveRankingGrades(path) {
        this._rankingGrades.save(path);
    }

    saveRankingScreen(path) {
        this._rankingScreen.save(path);
    }

    saveScoreEntry(path) {
        this._scoreEntry.save(path);
    }

    saveSongSelection(path) {
        this._songSelection.save(path);
    }

}

module.exports = Interface;