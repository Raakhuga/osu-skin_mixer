const Element = require('../base/element.js');
const { join } = require('path')

class PlayField {
    constructor() {
        this._elems = {
            'play-skip.png': null,
            'play-unranked.png': null,
            'play-warningarrow.png': null,
            'arrow-pause.png': null,
            'arrow-warning.png': null,
            'masking-border.png': null,
            'multi-skipped.png': null,
            'section-fail.png': null,
            'section-pass.png': null
        };
    }

    fillWith(file, path) {
        this._elems[file] = new Element(join(path, file), false);
    }
}

module.exports = PlayField;

'count1.png': null,
            'count2.png': null,
            'count3.png': null,
            'go.png': null,
            'ready.png': null,
            'hit0.png': null,
            'hit50.png': null,
            'hit100.png': null,
            'hit100k.png': null,
            'hit300.png': null,
            'hit300g.png': null,
            'hit300k.png': null,
            'inputoverlay-background.png': null,
            'inputoverlay-key.png': null,
            'inputoverlay-key.png': null,
            'inputoverlay-key.png': null,
            'inputoverlay-key.png': null,
            'inputoverlay-key.png': null,