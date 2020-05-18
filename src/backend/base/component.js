class Component {
    constructor(path, pathX2, sourceSkin, author) {
        this._sourceSkin = sourceSkin;
        this._author = author 
        this._path = path;
        this._pathX2 = pathX2;
    }

    get path() {
        return this._path;
    }

    set path(path) {
        this._path = path;
    }

    get pathX2() {
        return this._pathX2;
    }

    set pathX2(pathX2) {
        this._pathX2 = pathX2;
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