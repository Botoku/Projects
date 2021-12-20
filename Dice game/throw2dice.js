var cwidth = 100;
var cheight = 100;
var dicex = 50;
var dicey = 50;

var diceWidth = 100;
var diceHeight = 100;

var dotRad = 6;

var ctx;
var dx;
var dy;

var firstTurn = true;
var point;


function throwDice(){

    var sum; //var to hold value of the sum of the two dice

    var ch = 1+Math.floor(Math.random()*6);//set ch to be random for forst die

    sum = ch;// put this random value in sum
    dx = dicex;
    dy = dicey;
    drawFace(ch);// draw first die
    dx = dicex + 150;
    ch = 1+Math.floor(Math.random()*6);//set random number for second die
    sum += ch;//add second random die number to first

    drawFace(ch);// draw the second die


    if (firstTurn) {//implementation of the rules, is it first turn?

        switch(sum) {//if it is start switch with sum as condition
            case 7:
            case 11:
                document.f.outcome.value="You win!";
                break;

            case 2:
            case 3:
            case 12:
                document.f.outcome.value="You lose!";
                break;
            
            default: 
                point = sum; // save the sum in the variable point
                document.f.pv.value=point; // display the point value
                firstTurn = false; // set first turn to false
                document.f.stage.value="Need follow up throw.";
                document.f.outcome.value=" "// clear the outcome field
        }
    }

    else {
        switch (sum) { //start switch again using sum
            case point: // if sum is equal to whatever is in point
            document.f.outcome.value ="you win!";
            document.f.stage.value="back to first throw";
            document.f.pv.value=" ";
            firstTurn=true;
            break;
            case 7: 
            document.f.outcome.value="You lose!";
            document.f.stage.value="Back to first throw.";
            document.f.pv.value=" ";
            firstTurn=true;

        }
    }
}


function drawFace(n) {
    ctx = document.getElementById('canvas').getContext('2d');
    ctx.lineWidth = 5;
    ctx.clearRect(dx,dy,diceWidth,diceHeight);

ctx.fillStyle = "black";
    ctx.fillRect(dx,dy,diceWidth,diceHeight);
ctx.closePath();
    var dotx;
    var doty;
ctx.fillStyle ="white";
    

    switch(n) {
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
    
    dotx = dx + .5*diceWidth;
    doty = dy + .5*diceHeight; // center of the dot set at the middle of horizontal and vertical of box

    ctx.arc(dotx,doty,dotRad,0,2*Math.PI,true); //construct circle which will be drawn in with fill
    ctx.closePath();

    ctx.fill();

}

function draw2() {
    var dotx;

    var doty;
    
    
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
