'use strict';

/* Get a reference to the drawing context. Do not modify! */
const canvas = document.getElementById('canvas'); //reference the canvas element
const brush = canvas.getContext('2d'); //the drawing context

/* code goes here! */

brush.fillStyle = 'rebeccapurple';

//              x    y    w    h
brush.fillRect(100, 20, 200, 200);
brush.lineWidth = 4;
brush.strokeStyle = 'gold';
brush.strokeRect(100, 200, 200, 200);
brush.strokeRect(160, 50, 180, 55);

brush.beginPath(); //define a path
brush.moveTo(100, 200);
brush.lineTo(300,400);
brush.lineTo(400,200);
brush.stroke(); //now draw the path
brush.strokeStyle = 'red';

brush.beginPath(); //start a new path
brush.moveTo(400,200);
brush.lineTo(300,100);
brush.stroke(); //now draw the path

brush.beginPath(); //start a new path
          //cx  cy   r  angle-range
brush.arc(250, 250, 50, 0, 2*Math.PI);
brush.fill();


//animate!
// let xCenter = 10;
// brush.fillStyle = 'blue';
// window.setInterval(function() {
//     brush.clearRect(0, 0, 500, 500); 
//     brush.beginPath(); //start a new path
//     brush.arc(xCenter, 250, 50, 0, 2*Math.PI);
//     brush.fill();
//     xCenter += 5;    
// }, 30)





