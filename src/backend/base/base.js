
const Component = require('./component.js');
const { join } = require('path');

class Base {
    constructor() {}

    fillWith(key, file, path, sourceSkin, author, isX2 = false) {
        var paths = [];

        // get the name of the component erasing the '-{n}.extension' at the end of the file.
        file.map((f) => {
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

}

module.exports = Base;