module objects {
    
    /**
     * The button class extends the createjs Bitmap class
     * 
     * @export
     * @class buttonex
     * @extends {createjs.Bitmap}
     */
    export class buttonex extends createjs.Bitmap {

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
        constructor(private _imagePath:string, private _width:number, private _height:number, x:number, y:number, private _isCentered:boolean){

            //initialize the imagePath via a super call to the bitmap class constructor
            super(_imagePath);

            //check to see if the user requires the button to be centered
            if(_isCentered){
                this.regX = this._width * 0.5;
                this.regY = this._height * 0.5;
            }

            //set the positon of the button
            this.x = x;
            this.y = y;

            // bind the mouseOver and mouseOut events
            this.on("mouseover", this._mouseOver);
            this.on("mouseout", this._mouseOut);

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
            private _mouseOver(event:createjs.MouseEvent) {
                this.alpha = 0.7;
                this.scaleX = 1.2;
                this.scaleY = 1.2;
            }
            /**
             * This is the mouseout ent handler
             * 
             * @private
             * @param {createjs.MouseEvent} event 
             * 
             * @memberOf buttonex
             */
            private _mouseOut(event:createjs.MouseEvent) {
                this.alpha = 1;
                this.scaleX = 1;
                this.scaleY = 1;
            }

            }

        }

    }
}