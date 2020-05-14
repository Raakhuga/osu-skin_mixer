class Element {
    constructor(path, animatable) {
        this._path = path;
        if (animatable == null) {
            if (path.length == 1) this._animatable = false;
            else this._animatable = true;
        } else this._animatable = animatable;
    }

    get path() {
        return this._path;
    }

    set path(path) {
        this._path = path;
    }

    isAnimatable() {
        return this._animatable
    }
}

module.exports = Element