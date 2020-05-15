const Interface = require('./interface.js');

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
        const offsetWizardFiles = [
            'options-offset-tick.png'
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
        const countDownFiles = [
            'count1.png',
            'count2.png',
            'count3.png',
            'go.png',
            'ready.png'
        ];
        const hitBurstsFiles = [
            'hit0.png',
            'hit50.png',
            'hit100.png',
            'hit100k.png',
            'hit300.png',
            'hit300g.png',
            'hit300k.png'
        ];
        const inputOverlayFiles = [
            'inputoverlay-background.png',
            'inputoverlay-key.png'
        ];
        const pauseScreenFiles = [
            'pause-overlay.png',
            'fail-background.png',
            'pause-back.png',
            'pause-continue.png',
            'pause-replay.png',
            'pause-retry.png'

        ];
        const scoreBarFiles = [
            'scorebar-bg.png',
            'scorebar-colour.png',
            'scorebar-ki.png',
            'scorebar-kidanger.png',
            'scorebar-kidanger2.png',
            'scorebar-marker.png'
        ];
        const scoreNumbersFiles = [
            'score-0.png',
            'score-1.png',
            'score-2.png',
            'score-3.png',
            'score-4.png',
            'score-5.png',
            'score-6.png',
            'score-7.png',
            'score-8.png',
            'score-9.png',
            'score-comma.png',
            'score-dot.png',
            'score-percent.png',
            'score-x.png'
        ];
        const RankingGradesFiles = [
            'ranking-XH.png',
            'ranking-XH-small.png',
            'ranking-X.png',
            'ranking-X-small.png',
            'ranking-SH.png',
            'ranking-SH-small.png',
            'ranking-S.png',
            'ranking-S-small.png',
            'ranking-A.png',
            'ranking-A-small.png',
            'ranking-B.png',
            'ranking-B-small.png',
            'ranking-C.png',
            'ranking-C-small.png',
            'ranking-D.png',
            'ranking-D-small.png'
        ];
        const rankingScreenFiles = [
            'ranking-accuracy.png',
            'ranking-graph.png',
            'ranking-maxcombo.png',
            'ranking-panel.png',
            'ranking-perfect.png',
            'ranking-title.png',
            'ranking-replay.png',
            'ranking-retry.png',
            'ranking-winner.png'
        ];
        const scoreEntryFiles = [
            'scoreentry-0.png',
            'scoreentry-1.png',
            'scoreentry-2.png',
            'scoreentry-3.png',
            'scoreentry-4.png',
            'scoreentry-5.png',
            'scoreentry-6.png',
            'scoreentry-7.png',
            'scoreentry-8.png',
            'scoreentry-9.png',
            'scoreentry-comma.png',
            'scoreentry-dot.png',
            'scoreentry-percent.png',
            'scoreentry-x.png'
        ];
        const songSelectionFiles = [
            'menu-back.png',
            'menu-button-background.png',
            'selection-mode.png',
            'selection-mode-over.png',
            'selection-mods.png',
            'selection-mods-over.png',
            'selection-random.png',
            'selection-random-over.png',
            'selection-options.png',
            'selection-options-over.png',
            'selection-tab.png',
            'star.png',
            'star2.png'
        ];
        const modeSelectFiles = [
            'mode-osu.png',
            'mode-taiko.png',
            'mode-fruits.png',
            'mode-mania.png',
            'mode-osu-med.png',
            'mode-taiko-med.png',
            'mode-fruits-med.png',
            'mode-mania-med.png',
            'mode-osu-small.png',
            'mode-taiko-small.png',
            'mode-fruits-small.png',
            'mode-mania-small.png'
        ];

        this._interface = new Interface();
    }
}

module.exports = Skin;