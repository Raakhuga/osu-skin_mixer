
const Component = require('./component.js');
const { join } = require('path');

class Base {
    constructor() {}

    fillWith(file, path, sourceSkin, author) {
        if (Array.isArray(file)) {
            var components = [];

            // get the name of the component erasing the '-{n}.extension' at the end of the file.
            var componentName = file[0].split('-');
            componentName.pop();
            componentName = componentName.join('-');

            file.map((f) => {
                components.push(new Component(join(path, f), sourceSkin, author));
            });
            
            this._elems[componentName] = components
        } else {
            // get the component name erasing the extension of the file.
            var componentName = f.split('.');
            componentName.pop();
            componentName = componentName.join('.');

            this._elems[componentName] = new Component(join(path, file), sourceSkin, author);
        }
    }

}

module.exports = Base;