const Element = require('../base/element.js');
const { join } = require('path')

class ModIcons {
    constructor() {
        this._elems = {
            'selection-mod-autoplay.png': null,
            'selection-mod-cinema.png': null,
            'selection-mod-doubletime.png': null,
            'selection-mod-easy.png': null,
            'selection-mod-fadein.png': null,
            'selection-mod-flashlight.png': null,
            'selection-mod-halftime.png': null,
            'selection-mod-hardrock.png': null,
            'selection-mod-hidden': null,
            'selection-mod-key1.png': null,
            'selection-mod-key2.png': null,
            'selection-mod-key3.png': null,
            'selection-mod-key4.png': null,
            'selection-mod-key5.png': null,
            'selection-mod-key6.png': null,
            'selection-mod-key7.png': null,
            'selection-mod-key8.png': null,
            'selection-mod-key9.png': null,
            'selection-mod-keycoop.png': null,
            'selection-mod-mirror.png': null,
            'selection-mod-nightcore.png': null,
            'selection-mod-nofail.png': null,
            'selection-mod-perfect.png': null,
            'selection-mod-random.png': null,
            'selection-mod-relax.png': null,
            'selection-mod-relax2.png': null,
            'selection-mod-spunout.png': null,
            'selection-mod-suddendeath.png': null,
            'selection-mod-target.png': null
        };
    }

    fillWith(file, path) {
        this._elems[file] = new Element(join(path, file), false);
    }

    /*
    fillWith(file, path) {
        if (file == 'selection-mod-autoplay.png') {
            this._autoPlay = new Element(join(path, 'selection-mod-autoplay.png'), false);
        } else if (file == 'selection-mod-cinema.png') {
            this._cinema = new Element(join(path, 'selection-mod-cinema.png'), false);
        } else if (file == 'selection-mod-doubletime.png') {
            this._doubleTime = new Element(join(path, 'selection-mod-doubletime.png'), false);
        } else if (file == 'selection-mod-easy.png') {
            this._easy = new Element(join(path, 'selection-mod-easy.png'), false);
        } else if (file == 'selection-mod-fadein.png') {
            this._fadeIn = new Element(join(path, 'selection-mod-fadein.png'), false);
        } else if (file == 'selection-mod-flashlight.png') {
            this._flashlight = new Element(join(path, 'selection-mod-flashlight.png'), false);
        } else if (file == 'selection-mod-halftime.png') {
            this._halftime = new Element(join(path, 'selection-mod-halftime.png'), false);
        } else if (file == 'selection-mod-hardrock.png') {
            this._hardRock = new Element(join(path, 'selection-mod-hardrock.png'), false);
        } else if (file == 'selection-mod-hidden.png') {
            this._hidden = new Element(join(path, 'selection-mod-hidden.png'), false);
        } else if (file == 'selection-mod-key1.png') {
            this._key1 = new Element(join(path, 'selection-mod-key1.png'), false);
        } else if (file == 'selection-mod-key2.png') {
            this._key2 = new Element(join(path, 'selection-mod-key2.png'), false);
        } else if (file == 'selection-mod-key3.png') {
            this._key3 = new Element(join(path, 'selection-mod-key3.png'), false);
        } else if (file == 'selection-mod-key4.png') {
            this._key4 = new Element(join(path, 'selection-mod-key4.png'), false);
        } else if (file == 'selection-mod-key5.png') {
            this._key5 = new Element(join(path, 'selection-mod-key5.png'), false);
        } else if (file == 'selection-mod-key6.png') {
            this._key6 = new Element(join(path, 'selection-mod-key6.png'), false);
        } else if (file == 'selection-mod-key7.png') {
            this._key7 = new Element(join(path, 'selection-mod-key7.png'), false);
        } else if (file == 'selection-mod-key8.png') {
            this._key8 = new Element(join(path, 'selection-mod-key8.png'), false);
        } else if (file == 'selection-mod-key9.png') {
            this._key9 = new Element(join(path, 'selection-mod-key9.png'), false);
        } else if (file == 'selection-mod-keycoop.png') {
            this._keyCoop = new Element(join(path, 'selection-mod-keycoop.png'), false);
        } else if (file == 'selection-mod-mirror.png') {
            this._mirror = new Element(join(path, 'selection-mod-mirror.png'), false);
        } else if (file == 'selection-mod-nightcore.png') {
            this._nightcore = new Element(join(path, 'selection-mod-nightcore.png'), false);
        } else if (file == 'selection-mod-nofail.png') {
            this._noFail = new Element(join(path, 'selection-mod-nofail.png'), false);
        } else if (file == 'selection-mod-perfect.png') {
            this._perfect = new Element(join(path, 'selection-mod-perfect.png'), false);
        } else if (file == 'selection-mod-random.png') {
            this._random = new Element(join(path, 'selection-mod-random.png'), false);
        } else if (file == 'selection-mod-relax.png') {
            this._relax = new Element(join(path, 'selection-mod-relax.png'), false);
        } else if (file == 'selection-mod-relax2.png') {
            this._relax2 = new Element(join(path, 'selection-mod-relax2.png'), false);
        } else if (file == 'selection-mod-spunout.png') {
            this._spunOut = new Element(join(path, 'selection-mod-spunout.png'), false);
        } else if (file == 'selection-mod-suddendeath.png') {
            this._suddenDeath = new Element(join(path, 'selection-mod-suddendeath.png'), false);
        } else if (file == 'selection-mod-target.png') {
            this._target = new Element(join(path, 'selection-mod-target.png'), false);
        }
    }*/
}

module.exports = ModIcons;