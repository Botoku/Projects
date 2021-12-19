var cwidth = 400;
var cheight = 300; // variables for width and height of canvas

var dicex = 50;
var dicey = 50; // variables holding vertical and horizontal position of the die

var diceWidth = 100;
var diceHeight = 100;

var dotRad = 6; //radius of a dot

var ctx; // canvas context

function init() {
    var ch = 2;//1+Math.floor(Math.random()*6); // creates random number between 1 and 6
    drawFace(ch);
}

function drawFace(n) {
    ctx = document.getElementById('canvas').getContext('2d');

    ctx.lineWidth = 5;

    ctx.clearRect(dicex, dicey, diceWidth, diceHeight); // to clear the rectangle after it has produced a die face


    ctx.strokeRect(dicex, dicey, diceWidth, diceHeight); //draws the outline of the die face
    
    ctx.fillStyle = "#009966";

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
            draw4();
            draw1();
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

    ctx.beginPath();
    
    dotx = dicex + .5*diceWidth;
    doty = dicey + .5*diceHeight; // center of the dot set at the middle of horizontal and vertical of box

    ctx.arc(dotx,doty,dotRad,0,2*Math.PI,true); //construct circle which will be drawn in with fill
    ctx.closePath();

    ctx.fill();

}

function draw2() {
    var dotx;
    
    var doty;


    dotx = dicex + 3*dotRad;
    doty = dicey + 3*dotRad; // set the center of this dot to be 3 radius lengths from the top and left

    ctx.arc(dotx,doty,dotRad,0,2*Math.PI,true); //contstruct first dot

    dotx = dicex + diceWidth - 3*dotRad;
    doty = dicey + diceHeight - 3*dotRad; // center of the second dot

    ctx.arc(dotx,doty,dotRad,0,2*Math.PI,true);
    ctx.closePath();
    ctx.fill();




}

