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
     * the button class extends the createjs.Bitmap object, with options already defined
     *
     * @export
     * @class button
     * @extends {createjs.Bitmap}
     */
    var button = (function (_super) {
        __extends(button, _super);
        //constructor, utilizes super call for some variables and takes our own new ones
        /**
         * Creates an instance of button.
         * @param {string} imagePath
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         *
         * @memberOf button
         */
        function button(imagePath, x, y, isCentered) {
            var _this = 
            //initialize the imagePath via a super call to the bitmap class constructor
            _super.call(this, imagePath) || this;
            _this.imagePath = imagePath;
            _this.isCentered = isCentered;
            //check if buttonpath will be centered (anchor), if so set the anchor point to the middle
            if (_this.isCentered) {
                _this.regX = _this.getBounds().width * 0.5;
                _this.regY = _this.getBounds().height * 0.5;
            }
            //set the location of the label
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return button;
    }(createjs.Bitmap));
    objects.button = button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map