//PADROES
const default_color = "red";
const default_size = 16;
const default_mode = "COLOR"

//GLOBAIS
const container = document.querySelector("#container");
let grids = [];
let draw = false;
let current_size = default_size;
let current_color = default_color;
let current_mode = default_mode;
let gridSize = 600 / current_size;

//DOM HTML
let itens = document.querySelector(".settings");
let range = document.querySelector("#tamanho");
let output = document.querySelector("#resultado");

//EVENTOS
range.onmousemove = (e) => updateSizeValue(e.target.value)
range.onchange = (e) => changeSize(e.target.value)


function setSize(){
    let qtde = current_size*current_size;
    
    for(let i=0; i<qtde; i++){
        grids.push({
            id: i
        })
    }
}


function rendergrid(){
    const gridarray = grids.map(grid => `
    <div class="grid" data-id="${grid.id}"> </div>`);    

    container.innerHTML = gridarray.join(``);

    const grid = document.querySelectorAll('.grid');
    Array.from(grid).forEach((square) => {
        square.style.height = `${gridSize}px`;
        square.style.width = `${gridSize}px`
    })
    console.log(grid)
    
}

function events(){ 
    const grid = document.querySelectorAll('.grid');
    Array.from(grid).forEach((square) => {

        square.getAttribute('[data-id]');

        square.addEventListener('click', () => {
            
            square.style.backgroundColor = current_color;

        })
        square.addEventListener('mouseover', () => {
            if(draw){
                square.style.backgroundColor = current_color;
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
    // updateSizeValue(value);
    // clear();
    // setSize();
    // rendergrid();
    // events();
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

function clear(){
    container.innerHTML = ''
}

setSize();
rendergrid();
events();

container.onmousedown = drawOnGrid;
container.onmouseup = stopDraw;
