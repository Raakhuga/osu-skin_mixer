const Interface = require('./interface.js');
const fs = require('fs');
const { join } = require('path');

class Skin {
    constructor(path, files, name) {
        this._name = name;
        this._path = path;

        // Interface Files
        this._buttonFiles = {};
        this._cursorFiles = {};
        this._modFiles = {};
        this._offsetWizardFiles = {};
        this._playFieldFiles = {};
        this._countDownFiles = {};
        this._hitBurstsFiles = {};
        this._inputOverlayFiles = {};
        this._pauseScreenFiles = {};
        this._scoreBarFiles = {};
        this._scoreNumbersFiles = {};
        this._rankingGradesFiles = {};
        this._rankingScreenFiles = {};
        this._scoreEntryFiles = {};
        this._songSelectionFiles = {};
        this._modeSelectFiles = {};


        // Map all the files to its file dictionary
        this._skinFiles = {
            //Interface
            'button-left': this._buttonFiles, 
            'button-middle': this._buttonFiles, 
            'button-right': this._buttonFiles,
            'cursor': this._cursorFiles,
            'cursormiddle': this._cursorFiles,
            'cursor-smoke': this._cursorFiles,
            'cursortrail': this._cursorFiles,
            'selection-mod-autoplay': this._modFiles,
            'selection-mod-cinema': this._modFiles,
            'selection-mod-doubletime': this._modFiles,
            'selection-mod-easy': this._modFiles,
            'selection-mod-fadein': this._modFiles,
            'selection-mod-flashlight': this._modFiles,
            'selection-mod-halftime': this._modFiles,
            'selection-mod-hardrock': this._modFiles,
            'selection-mod-hidden': this._modFiles,
            'selection-mod-key1': this._modFiles,
            'selection-mod-key2': this._modFiles,
            'selection-mod-key3': this._modFiles,
            'selection-mod-key4': this._modFiles,
            'selection-mod-key5': this._modFiles,
            'selection-mod-key6': this._modFiles,
            'selection-mod-key7': this._modFiles,
            'selection-mod-key8': this._modFiles,
            'selection-mod-key9': this._modFiles,
            'selection-mod-keycoop': this._modFiles,
            'selection-mod-mirror': this._modFiles,
            'selection-mod-nightcore': this._modFiles,
            'selection-mod-nofail': this._modFiles,
            'selection-mod-perfect': this._modFiles,
            'selection-mod-random': this._modFiles,
            'selection-mod-relax': this._modFiles,
            'selection-mod-relax2': this._modFiles,
            'selection-mod-spunout': this._modFiles,
            'selection-mod-suddendeath': this._modFiles,
            'selection-mod-target': this._modFiles,
            'options-offset-tick': this._offsetWizardFiles,
            'play-skip': this._playFieldFiles,
            'play-unranked': this._playFieldFiles,
            'play-warningarrow': this._playFieldFiles,
            'arrow-pause': this._playFieldFiles,
            'arrow-warning': this._playFieldFiles,
            'masking-border': this._playFieldFiles,
            'multi-skipped': this._playFieldFiles,
            'section-fail': this._playFieldFiles,
            'section-pass': this._playFieldFiles,
            'count1': this._countDownFiles,
            'count2': this._countDownFiles,
            'count3': this._countDownFiles,
            'go': this._countDownFiles,
            'ready': this._countDownFiles,
            'hit0': this._hitBurstsFiles,
            'hit50': this._hitBurstsFiles,
            'hit100': this._hitBurstsFiles,
            'hit100k': this._hitBurstsFiles,
            'hit300': this._hitBurstsFiles,
            'hit300g': this._hitBurstsFiles,
            'hit300k': this._hitBurstsFiles,
            'inputoverlay-background': this._inputOverlayFiles,
            'inputoverlay-key': this._inputOverlayFiles,
            'pause-overlay': this._pauseScreenFiles,
            'fail-background': this._pauseScreenFiles,
            'pause-back': this._pauseScreenFiles,
            'pause-continue': this._pauseScreenFiles,
            'pause-replay': this._pauseScreenFiles,
            'pause-retry': this._pauseScreenFiles,
            'scorebar-bg': this._scoreBarFiles,
            'scorebar-colour': this._scoreBarFiles,
            'scorebar-ki': this._scoreBarFiles,
            'scorebar-kidanger': this._scoreBarFiles,
            'scorebar-kidanger2': this._scoreBarFiles,
            'scorebar-marker': this._scoreBarFiles,
            'score-0': this._scoreNumbersFiles,
            'score-1': this._scoreNumbersFiles,
            'score-2': this._scoreNumbersFiles,
            'score-3': this._scoreNumbersFiles,
            'score-4': this._scoreNumbersFiles,
            'score-5': this._scoreNumbersFiles,
            'score-6': this._scoreNumbersFiles,
            'score-7': this._scoreNumbersFiles,
            'score-8': this._scoreNumbersFiles,
            'score-9': this._scoreNumbersFiles,
            'score-comma': this._scoreNumbersFiles,
            'score-dot': this._scoreNumbersFiles,
            'score-percent': this._scoreNumbersFiles,
            'score-x': this._scoreNumbersFiles,
            'ranking-XH': this._rankingGradesFiles,
            'ranking-XH-small': this._rankingGradesFiles,
            'ranking-X': this._rankingGradesFiles,
            'ranking-X-small': this._rankingGradesFiles,
            'ranking-SH': this._rankingGradesFiles,
            'ranking-SH-small': this._rankingGradesFiles,
            'ranking-S': this._rankingGradesFiles,
            'ranking-S-small': this._rankingGradesFiles,
            'ranking-A': this._rankingGradesFiles,
            'ranking-A-small': this._rankingGradesFiles,
            'ranking-B': this._rankingGradesFiles,
            'ranking-B-small': this._rankingGradesFiles,
            'ranking-C': this._rankingGradesFiles,
            'ranking-C-small': this._rankingGradesFiles,
            'ranking-D': this._rankingGradesFiles,
            'ranking-D-small': this._rankingGradesFiles,
            'ranking-accuracy': this._rankingScreenFiles,
            'ranking-graph': this._rankingScreenFiles,
            'ranking-maxcombo': this._rankingScreenFiles,
            'ranking-panel': this._rankingScreenFiles,
            'ranking-perfect': this._rankingScreenFiles,
            'ranking-title': this._rankingScreenFiles,
            'ranking-replay': this._rankingScreenFiles,
            'ranking-retry': this._rankingScreenFiles,
            'ranking-winner': this._rankingScreenFiles,
            'scoreentry-0': this._scoreEntryFiles,
            'scoreentry-1': this._scoreEntryFiles,
            'scoreentry-2': this._scoreEntryFiles,
            'scoreentry-3': this._scoreEntryFiles,
            'scoreentry-4': this._scoreEntryFiles,
            'scoreentry-5': this._scoreEntryFiles,
            'scoreentry-6': this._scoreEntryFiles,
            'scoreentry-7': this._scoreEntryFiles,
            'scoreentry-8': this._scoreEntryFiles,
            'scoreentry-9': this._scoreEntryFiles,
            'scoreentry-comma': this._scoreEntryFiles,
            'scoreentry-dot': this._scoreEntryFiles,
            'scoreentry-percent': this._scoreEntryFiles,
            'scoreentry-x': this._scoreEntryFiles,
            'menu-back': this._songSelectionFiles,
            'menu-button-background': this._songSelectionFiles,
            'selection-mode': this._songSelectionFiles,
            'selection-mode-over': this._songSelectionFiles,
            'selection-mods': this._songSelectionFiles,
            'selection-mods-over': this._songSelectionFiles,
            'selection-random': this._songSelectionFiles,
            'selection-random-over': this._songSelectionFiles,
            'selection-options': this._songSelectionFiles,
            'selection-options-over': this._songSelectionFiles,
            'selection-tab': this._songSelectionFiles,
            'star': this._songSelectionFiles,
            'star2': this._songSelectionFiles,
            'mode-osu': this._modeSelectFiles,
            'mode-taiko': this._modeSelectFiles,
            'mode-fruits': this._modeSelectFiles,
            'mode-mania': this._modeSelectFiles,
            'mode-osu-med': this._modeSelectFiles,
            'mode-taiko-med': this._modeSelectFiles,
            'mode-fruits-med': this._modeSelectFiles,
            'mode-mania-med': this._modeSelectFiles,
            'mode-osu-small': this._modeSelectFiles,
            'mode-taiko-small': this._modeSelectFiles,
            'mode-fruits-small': this._modeSelectFiles,
            'mode-mania-small': this._modeSelectFiles
        }

        this._files = files;
        this._interface = new Interface();
    }

    fillComponents() {
        let exceptions = ['scoreentry', 'score'];

        this._files.forEach((file) => {
            // Find key
            // Delete extension
            var aux = file.split('.');
            aux.pop()
            var key = aux.join('.');

            // Delete @2x
            var isX2 = false;
            aux = key.split('@');
            if (aux.length > 1) {
                isX2 = true;
                aux.pop();
            }
            key = aux.join('@');

            // Delete -{num}
            var auxKey = key;
            aux = auxKey.split('-');
            if (!isNaN (aux.pop())) {
                auxKey = aux.join('-');
                for (var i = 0; i < exceptions.length; i++) {
                    if (exceptions[i] === auxKey) {
                        auxKey = key;
                        break;
                    }
                }
            }
            key = auxKey;

            // Update array
            /*
            skinFiles[key] = {
                'key': {
                    'x1': [],
                    'x2': [],
                    'sourceSkin': string,
                    'author': string
                }
            }
            */
            if (key in this._skinFiles) {
                if (key in this._skinFiles[key]) {
                    if (isX2) this._skinFiles[key][key]['x2'].push(file);
                    else this._skinFiles[key][key]['x1'].push(file);
                }
                else {
                    if (isX2) this._skinFiles[key][key] = { 'x1': [], 'x2': [file], 'sourceSkin': this._name, 'author': 'Unknown' }
                    else this._skinFiles[key][key] = { 'x1': [file], 'x2': [], 'sourceSkin': this._name, 'author': 'Unknown' }
                }
            } 
                
        });

        // Interface files
        this._interface.loadButton(this._buttonFiles, this._path);
        this._interface.loadCursor(this._cursorFiles, this._path);
        this._interface.loadModIcon(this._modFiles, this._path);
        this._interface.loadOffsetWizard(this._offsetWizardFiles, this._path);
        this._interface.loadPlayField(this._playFieldFiles, this._countDownFiles, this._hitBurstsFiles, this._inputOverlayFiles, this._pauseScreenFiles, this._scoreBarFiles, this._scoreNumbersFiles, this._path); 
        this._interface.loadRankingGrades(this._rankingGradesFiles, this._path);
        this._interface.loadRankingScreen(this._rankingScreenFiles, this._path);
        this._interface.loadScoreEntry(this._scoreEntryFiles, this._path);
        this._interface.loadSongSelection(this._songSelectionFiles, this._modeSelectFiles, this._path);
    }

    loadFromConfig() {
        var config = {};
        var configPath = join(this._path, 'config.json');

        if (fs.existsSync()) {
            try {
                config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
            } catch(err) {
                console.log(err);
            }
        }

        let keys = Object.keys(config);
        keys.forEach((key) => {
            
            if (key in this._skinFiles) {
                this._skinFiles[key][key] = { 'x1': config[key]['path'], 'x2': config[key]['pathX2'], 'sourceSkin': this._name, 'author': config[key]['author'] };
            } 
            
        });

        this._interface.loadButton(this._buttonFiles, this._path, this._name);
        this._interface.loadCursor(this._cursorFiles, this._path, this._name);
        this._interface.loadModIcon(this._modFiles, this._path, this._name);
        this._interface.loadOffsetWizard(this._offsetWizardFiles, this._path, this._name);
        this._interface.loadPlayField(this._playFieldFiles, this._countDownFiles, this._hitBurstsFiles, this._inputOverlayFiles, this._pauseScreenFiles, this._scoreBarFiles, this._scoreNumbersFiles, this._path, this._name); 
        this._interface.loadRankingGrades(this._rankingGradesFiles, this._path, this._name);
        this._interface.loadRankingScreen(this._rankingScreenFiles, this._path, this._name);
        this._interface.loadScoreEntry(this._scoreEntryFiles, this._path, this._name);
        this._interface.loadSongSelection(this._songSelectionFiles, this._modeSelectFiles, this._path, this._name);
    }

    saveSkin() {
        this._interface.saveButton(this._path);
        this._interface.saveCursor(this._path);
        this._interface.saveModIcon(this._path);
        this._interface.saveOffsetWizard(this._path);
        this._interface.savePlayField(this._path);
        this._interface.saveRankingGrades(this._path);
        this._interface.saveRankingScreen(this._path);
        this._interface.saveScoreEntry(this._path);
        this._interface.saveSongSelection(this._path);
    }
}

module.exports = Skin;