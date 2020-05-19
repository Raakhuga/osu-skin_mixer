
const Component = require('./component.js');
const fs = require('fs');
const { join } = require('path');


class Base {
    //constructor() {}

    fillWith(key, file, path, sourceSkin, author, isX2 = false) {
        var paths = [];

        // get the name of the component erasing the '-{n}.extension' at the end of the file.
        file.forEach((f) => {
            paths.push(join(path, f));    
        });

        if (this._elems[key] === null) {
            if (isX2) this._elems[key] = new Component(null, paths, sourceSkin, author); 
            else this._elems[key] = new Component(paths, null, sourceSkin, author);
            //this._elems[key] = components
        } else {
            if (isX2) this._elems[key].pathX2 = paths;
            else this._elems[key].path = paths;
        }
    }
    
    replace(origPath, newPath, path) {
        if ( !( origPath.length === newPath.length && (origPath.length === 0 || origPath[0] === newPath[0])) ) { // Check if the origin changed

            // Replace the old file with the new one
            this.copy(newPath, path);

            // Remove the excess files (animations)
            for(var i = newPath.length; i < origPath.length; i++ ) {
                let fileName = origPath[i].split('/').pop();
                try {
                    fs.unlinkSync(join(path, fileName));
                } catch(err) {
                    console.log(err);
                }
            }

        }
    }

    copy(newObjects, path) {
        newObjects.forEach((file) => {
            let fileName = file.split('/').pop();
            try {
                fs.copyFileSync(file, join(path, fileName));
            } catch(err) {
                console.log(err);
            }
        });
    }

    delete(oldObjects, path) {
        oldObjects.forEach((file) => {
            let fileName = file.split('/').pop();
            try {
                fs.unlinkSync(join(path, fileName));
            } catch(err) {
                console.log(err);
            }
        });
    }

    save(path) {

        // load the config file
        let configPath = join(path, 'config.json');
        var config = {}; 
        if (fs.existsSync(configPath)) {
            try {
                config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
            } catch(err) {
                console.log(err);
            }
        }

        let keys = Object.keys(this._elems);
        keys.forEach((key) => {

            if (key in config) { // The object was on the skin before
                
                if (this._elems[key] === null) { // The object is not on the new skin

                    // Delete all of the old files
                    this.delete(config[key]['path'], path);
                    this.delete(config[key]['pathX2'], path);
                    delete config[key];

                    console.log(key + 'deleted');

                } else {  // The object is on the new skin
                    
                    // replace the old files with the new ones
                    this.replace(config[key]['path'], this._elems[key].path, path);
                    this.replace(config[key]['pathX2'], this._elems[key].pathX2, path);

                    // update the config dict
                    config[key]['path'] = this._elems[key].path;
                    config[key]['pathX2'] = this._elems[key].pathX2;
                    config[key]['author'] = this._elems[key].author;
                }
            } else { // The object was not on the skin before
                
                if (this._elems[key] !== null) {
                    this.copy(this._elems[key].path, path);
                    this.copy(this._elems[key].pathX2, path);
    
                    config[key] = {
                        'path': this._elems[key].path,
                        'pathX2': this._elems[key].pathX2,
                        'author': this._elems[key].author
                    };
                }

            }

        });

        // Save the config file
        try {
            let configString = JSON.stringify(config, null, 4);
            fs.writeFileSync(configPath, configString);
        } catch (err) {
            console.log(err);
        }

    } 

}

module.exports = Base;