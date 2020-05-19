const Skin = require('./skin.js');
const fs = require('fs');
const path = require('path');

const SkinMixerName = "!!!!!!!###  osu!skinMixer";

class BeController {
    constructor() {
        this._mixedSkin = null;
        this._skins = [];
        this._skinFolder = __dirname;
        this._skinNames = null;
    }

    get skinFolder() {
        return this._skinFolder;
    }

    set skinFolder(skinFolder) {
        this._skinFolder = skinFolder;
    }

    loadSkins() {

        // Read all the skins on the skin folder
        this._skinNames = fs.readdirSync(this._skinFolder);

        // Remove the mixedSkin from the list
        let index = this._skinNames.indexOf(SkinMixerName);
        if (index > -1) {
            this._skinNames.splice(index, 1);
        }

        // Create all the skin objects for every skin on the folder
        this._skinNames.forEach((skinName) => {
            let skinPath = path.join(this._skinFolder, skinName);
            if (fs.lstatSync(skinPath).isDirectory()) {
                let files = fs.readdirSync(skinPath);
                let skin = new Skin(skinPath, files, skinName);
                skin.fillComponents();
                this._skins.push(skin);
            }
        });

        // Create the mixedSkin object
        let skinPath = path.join(this._skinFolder, SkinMixerName);
        if (!fs.existsSync(skinPath)) {
            fs.mkdirSync(skinPath);
        }
        let files = fs.readdirSync(skinPath);
        this._mixedSkin = new Skin(skinPath, files, SkinMixerName);
        this._mixedSkin.loadFromConfig();

    }

    saveSkin() {
        this._mixedSkin.saveSkin();
    }
}

module.exports = BeController;