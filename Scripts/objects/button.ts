module objects {
    
    /**
     * the button class extends the createjs.Bitmap object, with options already defined
     * 
     * @export
     * @class button
     * @extends {createjs.Bitmap}
     */
    export class button extends createjs.Bitmap {

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
        constructor(private imagePath:string, x:number, y:number, private isCentered:boolean){

            //initialize the imagePath via a super call to the bitmap class constructor
            super(imagePath);

            //check if buttonpath will be centered (anchor), if so set the anchor point to the middle
            if(this.isCentered){
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }

            //set the location of the label
            this.x = x;
            this. y = y;

        }

    }
}