var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    /**
     * The button class extends the createjs Bitmap class
     *
     * @export
     * @class buttonex
     * @extends {createjs.Bitmap}
     */
    var buttonex = (function (_super) {
        __extends(buttonex, _super);
        //CONSTRUCTORS
        /**
         * Creates an instance of buttonex. (x and y already exist within the class, so we dont need to declare private)
         * @param {string} _imagePath
         * @param {number} _width
         * @param {number} _height
         * @param {number} x
         * @param {number} y
         * @param {boolean} _isCentered
         *
         * @memberOf buttonex
         */
        function buttonex(_imagePath, _width, _height, x, y, _isCentered) {
            var _this = 
            //initialize the imagePath via a super call to the bitmap class constructor
            _super.call(this, _imagePath) || this;
            _this._imagePath = _imagePath;
            _this._width = _width;
            _this._height = _height;
            _this._isCentered = _isCentered;
            //check to see if the user requires the button to be centered
            if (_isCentered) {
                _this.regX = _this._width * 0.5;
                _this.regY = _this._height * 0.5;
            }
            //set the positon of the button
            _this.x = x;
            _this.y = y;
            // bind the mouseOver and mouseOut events
            _this.on("mouseover", _this._mouseOver);
            _this.on("mouseout", _this._mouseOut);
            return _this;
        }
        // Private Methods 
        /**
         * This is the mouse over event handler
         *
         * @private
         * @param {createjs.MouseEvent} event
         *
         * @memberOf buttonex
         */
        buttonex.prototype._mouseOver = function (event) {
            this.alpha = 0.7;
            this.scaleX = 1.2;
            this.scaleY = 1.2;
        };
        /**
         * This is the mouseout ent handler
         *
         * @private
         * @param {createjs.MouseEvent} event
         *
         * @memberOf buttonex
         */
        buttonex.prototype._mouseOut = function (event) {
            this.alpha = 1;
            this.scaleX = 1;
            this.scaleY = 1;
        };
        return buttonex;
    }(createjs.Bitmap));
    objects.buttonex = buttonex;
})(objects || (objects = {}));
//# sourceMappingURL=button-t.js.map