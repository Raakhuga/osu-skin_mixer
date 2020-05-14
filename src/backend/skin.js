class Skin {
    constructor(path) {
        this._path = path;
        const buttonFiles = [
            'button-left.png', 
            'button-middle.png', 
            'button-right.png'
        ];
        const cursorFiles = [
            'cursor.png',
            'cursormiddle.png',
            'cursor-smoke.png',
            'cursortrail.png'
        ];
        const modFiles = [
            'selection-mod-autoplay.png',
            'selection-mod-cinema.png',
            'selection-mod-doubletime.png',
            'selection-mod-easy.png',
            'selection-mod-fadein.png',
            'selection-mod-flashlight.png',
            'selection-mod-halftime.png',
            'selection-mod-hardrock.png',
            'selection-mod-hidden',
            'selection-mod-key1.png',
            'selection-mod-key2.png',
            'selection-mod-key3.png',
            'selection-mod-key4.png',
            'selection-mod-key5.png',
            'selection-mod-key6.png',
            'selection-mod-key7.png',
            'selection-mod-key8.png',
            'selection-mod-key9.png',
            'selection-mod-keycoop.png',
            'selection-mod-mirror.png',
            'selection-mod-nightcore.png',
            'selection-mod-nofail.png',
            'selection-mod-perfect.png',
            'selection-mod-random.png',
            'selection-mod-relax.png',
            'selection-mod-relax2.png',
            'selection-mod-spunout.png',
            'selection-mod-suddendeath.png',
            'selection-mod-target.png'
        ];
        const playFieldFiles = [
            'play-skip.png',
            'play-unranked.png',
            'play-warningarrow.png',
            'arrow-pause.png',
            'arrow-warning.png',
            'masking-border.png',
            'multi-skipped.png',
            'section-fail.png',
            'section-pass.png'
        ];
        
    }
}

module.exports = Skin;