const Skin = require('./skin.js');
const fs = require('fs');
const path = require('path');

class BeController {
    constructor() {
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
        this._skinNames = fs.readdirSync(this._skinFolder);
        this._skinNames.map((folder) => {
            let skinPath = path.join(this._skinFolder, folder);
            if (fs.lstatSync(skinPath).isDirectory()) {
                let files = fs.readdirSync(skinPath);
                let skin = new Skin(skinPath, files);
                skin.fillComponents();
                this._skins.push(skin);
            }
        })
    }
}

module.exports = BeController;