//globals
const container = document.querySelector("#container");
let grids = [];
let draw = false;


function setSize(){
    let size = 16*16;
    
    for(let i=0; i<size; i++){
        grids.push({
            id: i
        })
    }
}


function rendergrid(){
    const gridarray = grids.map(grid => `
    <div class="grid" data-id="${grid.id}"> </div>`);

    container.innerHTML = gridarray.join(``);
}

function events(){ 
    const grid = document.querySelectorAll('.grid');
    Array.from(grid).forEach((square) => {

        square.getAttribute('[data-id]');

        square.addEventListener('click', () => {
            
            square.style.backgroundColor = "#333";

        })
        square.addEventListener('mouseover', () => {
            if(draw){
                square.style.backgroundColor = "#333";
            }
        })
        
    });
}
function drawOnGrid(){
    draw = true 
}

function stopDraw(){
    draw = false 
}


setSize();
rendergrid();
events();

container.onmousedown = drawOnGrid;
container.onmouseup = stopDraw;
