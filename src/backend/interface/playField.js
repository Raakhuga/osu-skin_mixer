const Base = require('../base/base.js');
const CountDown = require('./countdown.js');
const HitBursts = require('./hitBursts.js');
const InputOverlay = require('./inputOverlay.js');
const PauseScreen = require('./pauseScreen.js');
const ScoreBar = require('./scoreBar.js');
const ScoreNumbers = require('./scoreNumbers.js');

class PlayField extends Base {
    constructor() {
        super();
        this._countDown = new CountDown();
        this._hitBursts = new HitBursts();
        this._inputOverlay = new InputOverlay();
        this._pauseScreen = new PauseScreen();
        this._scoreBar = new ScoreBar();
        this._scoreNumbers = new ScoreNumbers();
        this._elems = {
            'play-skip': null,
            'play-unranked': null,
            'play-warningarrow': null,
            'arrow-pause': null,
            'arrow-warning': null,
            'masking-border': null,
            'multi-skipped': null,
            'section-fail': null,
            'section-pass': null
        };
    }

    loadCountDown(dict, path) { 
        let keys = Object.keys(dict);
        keys.map((key) => {
            this._countDown.fillWith(key, dict[key]['x1'], path, 'SS', 'auth');
            this._countDown.fillWith(key, dict[key]['x2'], path, 'SS', 'auth', true);
        });
    }

    loadHitBursts(dict, path) { 
        let keys = Object.keys(dict);
        keys.map((key) => {
            this._hitBursts.fillWith(key, dict[key]['x1'], path, 'SS', 'auth');
            this._hitBursts.fillWith(key, dict[key]['x2'], path, 'SS', 'auth', true);
        });
    }

    loadInputOverlay(dict, path) { 
        let keys = Object.keys(dict);
        keys.map((key) => {
            this._inputOverlay.fillWith(key, dict[key]['x1'], path, 'SS', 'auth');
            this._inputOverlay.fillWith(key, dict[key]['x2'], path, 'SS', 'auth', true);
        });
    }

    loadPauseScreen(dict, path) { 
        let keys = Object.keys(dict);
        keys.map((key) => {
            this._pauseScreen.fillWith(key, dict[key]['x1'], path, 'SS', 'auth');
            this._pauseScreen.fillWith(key, dict[key]['x2'], path, 'SS', 'auth', true);
        });
    }

    loadScoreBar(dict, path) { 
        let keys = Object.keys(dict);
        keys.map((key) => {
            this._scoreBar.fillWith(key, dict[key]['x1'], path, 'SS', 'auth');
            this._scoreBar.fillWith(key, dict[key]['x2'], path, 'SS', 'auth', true);
        });
    }

    loadScoreNumbers(dict, path) { 
        let keys = Object.keys(dict);
        keys.map((key) => {
            this._scoreNumbers.fillWith(key, dict[key]['x1'], path, 'SS', 'auth');
            this._scoreNumbers.fillWith(key, dict[key]['x2'], path, 'SS', 'auth', true);
        });
    }
    
    get playSkip() {
        return this._elems['play-skip'];
    }

    set playSkip(component) {
        this._elems['play-skip'] = component;
    }

    get playUnranked() {
        return this._elems['play-unranked'];
    }

    set playUnranked(component) {
        this._elems['play-unranked'] = component;
    }

    get playWarningArrow() {
        return this._elems['play-warningarrow'];
    }

    set playWarningArrow(component) {
        this._elems['play-warningarrow'] = component;
    }

    get arrowPause() {
        return this._elems['arrow-pause'];
    }

    set arrowPause(component) {
        this._elems['arrow-pause'] = component;
    }

    get arrowWarning() {
        return this._elems['arrow-warning'];
    }

    set arrowWarning(component) {
        this._elems['arrow-warning'] = component;
    }

    get maskingBorder() {
        return this._elems['masking-border'];
    }

    set maskingBorder(component) {
        this._elems['masking-border'] = component;
    }

    get multiSkipped() {
        return this._elems['multi-skipped'];
    }

    set multiSkipped(component) {
        this._elems['multi-skipped'] = component;
    }

    get sectionFail() {
        return this._elems['section-fail'];
    }

    set sectionFail(component) {
        this._elems['section-fail'] = component;
    }

    get sectionPass() {
        return this._elems['section-pass'];
    }

    set sectionPass(component) {
        this._elems['section-pass'] = component;
    }
}

module.exports = PlayField;