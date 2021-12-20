var cwidth = 400;
var cheight = 300; // variables for width and height of canvas

var dicex = 50;
var dicey = 50; // variables holding vertical and horizontal position of the die

var diceWidth = 100;
var diceHeight = 100;

var dotRad = 6; //radius of a dot

var ctx; // canvas context

var dx;// var for horizontal positioning, changed for each die
var dy;// var for vertical position, same for both dice

function throwDice() {
    var ch = 1+Math.floor(Math.random()*6);
    dx = dicex;
    dy = dicey;
    drawFace(ch);

    dx = dicex + 150;// adjust the horizontal position of the second die

    ch=1+Math.floor(Math.random()*6);
    drawFace(ch);
}




function drawFace(n) {
    ctx = document.getElementById('canvas').getContext('2d');

    ctx.lineWidth = 5;

    ctx.clearRect(dx, dy, diceWidth, diceHeight); // to clear the rectangle after it has produced a die face
    
    ctx.fillStyle = "black";

    ctx.rect(dx, dy, diceWidth, diceHeight); //draws the outline of the die face
    ctx.fill();
    
var dotx;
var doty;
    switch(n) {  //start switch using the number of dots
        case 1:
            draw1();
            break;
            case 2: 
            draw2();
            break;
            case 3: 
            draw2();
            draw1();
            break;
            case 4: 
            draw4();
            break;
            case 5:
            draw1();
            draw4();
            break;
            case 6:
            draw4();
            draw2mid();
            break;
        
    }

}
function draw1() {
    var dotx;
    var doty; // var for vertical and horizintal position of dot
    ctx.fillStyle = "white";
    ctx.beginPath();

    dotx = dx + .5*diceWidth;
    doty = dy + .5*diceHeight; // center of the dot set at the middle of horizontal and vertical of box

    ctx.arc(dotx,doty,dotRad,0,2*Math.PI,true); //construct circle which will be drawn in with fill
    ctx.closePath();

    ctx.fill();

}

function draw2() {
    var dotx;

    var doty;
    ctx.fillStyle = "white";
    ctx.beginPath();


    dotx = dx + 3*dotRad;
    doty = dy + 3*dotRad; // set the center of this dot to be 3 radius lengths from the top and left

    ctx.arc(dotx,doty,dotRad,0,2*Math.PI,true); //contstruct first dot

    dotx = dx + diceWidth - 3*dotRad;
    doty = dy + diceHeight - 3*dotRad; // center of the second dot

    ctx.arc(dotx,doty,dotRad,0,2*Math.PI,true);
    ctx.closePath();
    ctx.fill();
}



function draw4() {
    var dotx;
    var doty;
    ctx.fillStyle = "white";

    ctx.beginPath();
    dotx = dx + 3*dotRad;
    doty = dy + 3*dotRad;
    ctx.arc(dotx,doty,dotRad,0,2*Math.PI,true);
   ctx.closePath();
   ctx.fill();


   ctx.beginPath();
   
   dotx = dx + diceWidth-3*dotRad;
   doty = dy + diceHeight-3*dotRad;

   ctx.arc(dotx,doty,dotRad,0,2*Math.PI,true);
   ctx.closePath();
   ctx.fill();
   
   ctx.beginPath();
   dotx = dx + 3*dotRad;
   doty = dy + diceHeight - 3*dotRad;

   ctx.arc(dotx,doty,dotRad,0, 2*Math.PI,true);
   ctx.closePath();
   ctx.fill();
   
   ctx.beginPath();
   dotx = dx + diceWidth - 3*dotRad;
   doty = dy + 3*dotRad;

   ctx.arc(dotx,doty,dotRad,0,2*Math.PI,true);
   ctx.closePath();
   ctx.fill();
   }


   function draw2mid(){

    var dotx;
    var doty;
    ctx.fillStyle = "white";
    ctx.beginPath();

    dotx = dx + 3*dotRad;
    doty = dy + 0.5*diceHeight;

    ctx.arc(dotx,doty,dotRad,0,2*Math.PI,true);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    dotx = dx + diceWidth - 3*dotRad;
    doty = dy + .5*diceHeight;

    ctx.arc(dotx,doty,dotRad,0,2*Math.PI,true);
    ctx.closePath();
    ctx.fill();


   }
