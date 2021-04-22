var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("_x: " + this._x + " and Y: " + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0');
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var p1 = new Point(2, 3);
var x = p1.x; //read(get)
p1.x = 10; //write (set)
p1.draw();
