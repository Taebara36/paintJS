const canvas = document.querySelector("#jsCanvas");
const colors = document.querySelectorAll(".controls_jsColor");
const ctx =canvas.getContext("2d");
const range = document.querySelector("#jsRange");
const mode = document.querySelector("#jsMode");
let painting =false;
let filling =false;

const INITIAL_COLOR = "2c2c2c";
const CANVAS_SIZE =700;
canvas.width=CANVAS_SIZE;
canvas.height=CANVAS_SIZE;
console.log(colors)

ctx.strokeStyle= INITIAL_COLOR;
ctx.fillstyle = INITIAL_COLOR;
ctx.lineWidth =2.5;

function stopPainting(){
    painting =false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
        ctx.stroke();
      }
}

function startPainting(){
    painting = true;
}




function canvansClick(){
    if(filling){
        ctx.fillRect(0,0, CANVAS_SIZE, CANVAS_SIZE)
    }
}



if(canvas){
    canvas.addEventListener("mousemove",onMouseMove)
    canvas.addEventListener("mousedown",startPainting)
    canvas.addEventListener("mouseup",stopPainting)
    canvas.addEventListener("mouseleave",stopPainting)
    canvas.addEventListener("click",canvansClick)
}

function changeColor(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle= color
    ctx.fillStyle = color;
  
}
 
Array.from(colors).forEach(item => item.addEventListener("click",changeColor))


function changeRange(event){
    const size = event.target.value;
    ctx.lineWidth =size;
    
}

if(range){
    range.addEventListener("input",changeRange)
}


function modeClick(){
    if(filling === true){
        filling = false
        mode.innerText = "FIll";
    }else{
        filling =true;
        mode.innerText = "paint";
       
    }
}



if(mode){
    mode.addEventListener('click',modeClick)
}