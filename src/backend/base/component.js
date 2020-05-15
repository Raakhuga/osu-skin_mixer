class Component {
    constructor(path, sourceSkin, author) {
        this._sourceSkin = sourceSkin;
        this._author = author 
        this._path = path;
    }

    get path() {
        return this._path;
    }

    set path(path) {
        this._path = path;
    }

    get author() {
        return this._author;
    }

    set author(author) {
        this._author = author;
    }

    get sourceSkin() {
        return this._sourceSkin;
    }

    set sourceSkin(sourceSkin) {
        this._sourceSkin = sourceSkin;
    }
}

module.exports = Component;