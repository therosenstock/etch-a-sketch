//PADROES
const default_color = "rgb(33,203,33)";
const default_size = 16;
const default_mode = "DRAW"

//GLOBAIS
const container = document.querySelector("#container");
let draw = false;
let current_size = default_size;
let current_color = default_color;
let current_mode = default_mode;
let gridSize = 600 / current_size;

//DOM HTML
let itens = document.querySelector(".settings");
let range = document.querySelector("#tamanho");
let output = document.querySelector("#resultado");
let cleanbtn = document.querySelector("#btn-clean");
let eraserbtn = document.querySelector("#btn-eraser");
let drawbtn = document.querySelector("#btn-draw");
let colorpick = document.querySelector("#color-pick")


//EVENTOS
range.onmousemove = (e) => updateSizeValue(e.target.value)
range.onchange = (e) => changeSize(e.target.value)
colorpick.onchange = (e) => changeColor(e.target.value)



function setSizeGrid(){
    let grids = [];

    let qtde = current_size*current_size;
    
    for(let i=0; i<qtde; i++){
        grids.push({
            id: i
        })
    }
    renderGrid(grids)
}


function renderGrid(grids){
    const gridarray = grids.map(grid => `
    <div class="grid" data-id="${grid.id}"> </div>`);    

    container.innerHTML = gridarray.join(``);

    const grid = document.querySelectorAll('.grid');
    Array.from(grid).forEach((square) => {
        square.style.height = `${gridSize}px`;
        square.style.width = `${gridSize}px`;
    })
    eventGrid();    
}

function eventGrid(){ 
    const grid = document.querySelectorAll('.grid');
   
    Array.from(grid).forEach((square) => {

        square.getAttribute('[data-id]');
        
        square.addEventListener('click', () => {
            if(current_mode == "ERASER"){
                square.style.backgroundColor = "#fff";

            }else{
                square.style.backgroundColor = current_color;
            }

        })
        square.addEventListener('mouseover', () => {
            if(draw){
                if(current_mode == "ERASER"){
                    square.style.backgroundColor = "#fff";
    
                }else{
                    square.style.backgroundColor = current_color;
                }
            }
        })
        square.addEventListener('mouseleave', () => {
            if(draw){
                if(current_mode == "ERASER"){
                    square.style.backgroundColor = "#fff";
    
                }else{
                    square.style.backgroundColor = current_color;
                }
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

function changeSize(value){
    current_size = value;
    console.log(value)
    gridSize = 600 / current_size;
    updateSizeValue(value);
    clearGrid();
}

function updateSizeValue(value){
    output.innerHTML = `${value} X ${value}`
} 

function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{
        itens.style.display = 'block'
    }
   
}

function clearGrid(){
    container.innerHTML = '';
    setSizeGrid();
}

function changeMode (value){
    current_mode = value;
}

function changeColor (value){
    current_color = value;
    current_mode = "DRAW";
}

setSizeGrid();

container.onmousedown = drawOnGrid;
container.onmouseup = stopDraw;
