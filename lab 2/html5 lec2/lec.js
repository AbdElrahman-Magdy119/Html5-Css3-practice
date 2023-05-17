function say()
{
    document.getElementById("edit").innerHTML+="<title>eye</title>";
}
function say2()
{
    document.getElementById("edit2").innerHTML+="<title>eye</title>";
}
function say3()
{
    document.getElementById("edit3").innerHTML+="<title>hair</title>";
}


//  var canvas = document.getElementById("can");
//  var ctx = canvas.getContext("2d");
// var img = new Image();
// img.src = "1.png";
//  img.onload = function (){
//     ctx.drawImage(img,50,50,100,100);
//  }
//  function say()
//  {
//     var img = new Image();
//     img.src = "2.png";
//     img.onload = function (){
//         ctx.drawImage(img,50,50,100,100);
//      }
//  }
//  function say2()
//  {
//     var img = new Image();
//     img.src = "1.png";
//     img.onload = function (){
//         ctx.drawImage(img,50,50,100,100);
//      }
//  }
var check= false;
var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");

function dis(){
 canvas.addEventListener('mousedown', 
 function (event) {
    check = true;
});

canvas.addEventListener('mouseup', 
function (event) {    
    check= false;
});
canvas.addEventListener('mousemove',
 function (event) {

    if (check) {
        ctx.strokeRect(event.offsetX, event.offsetY,50,50);
        ctx.strokeStyle='red';
        ctx.lineWidth=1;
    }
});
}


function cler()
 {
    canvas.addEventListener('mousedown',
     function (event) {
        check = true;
    });
    
    canvas.addEventListener('mouseup',
     function (event) {    
    
        check= false;
    
    });
    canvas.addEventListener('mousemove', 
    function (event) {
    
        if (check) {
            ctx.fillRect(event.offsetX, event.offsetY,50,50);
            ctx.fillStyle='white';
            ctx.strokeStyle='white';
        }
    });
 }


