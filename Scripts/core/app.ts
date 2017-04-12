// IIFE - Immediately Invoked Function Expression
(function(){

//Function level variables
let canvas:HTMLElement = document.getElementById("canvas");

let canvasWidth:number;
let canvasHalfWidth:number;
let canvasHeight:number;
let canvasHalfHeight:number;

let stage:createjs.Stage;
let helloLabel:objects.Label;
let goodbyeLabel:objects.Label;
let clickMeButton:objects.buttonex;

/**
 * This method initializes the createjs Stage object and 
 * starts the app or game loop
 * 
 *  @method Start
 *  @returns void
 */
function Start():void {

  OnResize();
  //create a new stage container (parent container for our app)
  stage = new createjs.Stage(canvas);

  createjs.Ticker.framerate = 60; //set the framerate to 60 FPS

  //Look for a tick event (every frame), call update function
  createjs.Ticker.on("tick", Update)

  //enable mouseOver, check it at 20fps
  stage.enableMouseOver(20);

  Main(); //call the main function
}


/**
 * the main app loop (or Game loop)
 * 
 * @method Update
 * @returns void
 */
function Update(event:createjs.Event):void {

  // spin a hello world text object (rotate my hello label by 5 pixels every frame)
  helloLabel.rotation += -5; //rotate counter clockwise every frame

  stage.update(); //redraw the stage (we are redrawing the stage every 16ms). update will call the "tick" event
}

/**
 * This method is where all the fun happens, we add child objects to the stage
 * 
 * This function will only trigger one time.
 * 
 * @method Main
 * @returns void
 */
function Main():void {
  console.log("App Started!!");

  /*
  //create our helloLabel 
  helloLabel = new createjs.Text("Hello, World", "20px Consolas", "#000000");

  //set vertical alignment point on the font
  // helloLabel.textBaseline = "center";

  //measure the width/height of our label, set our anchor to the middle of the label
  helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
  helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;

  //set our coordinates
  helloLabel.x = 125;
  helloLabel.y = 125;
  */

  //We use our custom Label object which extends the Text /**
  helloLabel = new objects.Label("Hello, World", "20px", "Consolas", "#000000", canvasHalfWidth, canvasHalfHeight, true);
  goodbyeLabel = new objects.Label("Good Bye!","24px","Arial","#FF0000", canvasHalfWidth, canvasHalfHeight, true);
  
  //add click me clickMeButton
  /*
  clickMeButton = new createjs.Bitmap("../../Assets/images/clickMeButton.png");
  clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
  clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
  clickMeButton.x = 125;
  clickMeButton.y = 200;
  */

  //add a click me button with custom button class
  clickMeButton = new objects.buttonex("../../Assets/images/clickMeButton.png",150,40,canvasHalfWidth,canvasHalfHeight+75,true);
  

  //add our helloLabel to the stage
  //all objects added to the stage appear in the order they are added
  stage.addChild(helloLabel);
  stage.addChild(goodbyeLabel);
  stage.addChild(clickMeButton);

  //click button event listener, and handler
  clickMeButton.on("click", function(event:createjs.MouseEvent){
    helloLabel.text = "Hi Ya!";
    goodbyeLabel.text = "See ya!";
  });

}

function OnResize() {
  canvasWidth = window.innerWidth * 0.5;
  canvasHeight = window.innerHeight * 0.5;
  canvasHalfWidth = canvasWidth * 0.5;
  canvasHalfHeight = canvasHeight * 0.5;

  canvas.setAttribute("width",canvasWidth.toString());
  canvas.setAttribute("height",canvasHeight.toString());

  //have the objects been created yet?
  if(helloLabel){
  helloLabel.x = canvasHalfWidth;
  helloLabel.y = canvasHalfHeight;
  goodbyeLabel.x = canvasHalfWidth;
  goodbyeLabel.y = canvasHalfHeight;
  clickMeButton.x = canvasHalfWidth;
  clickMeButton.y = canvasHalfHeight+75;
}

}

window.onload = Start;
window.onresize = OnResize;

})();
