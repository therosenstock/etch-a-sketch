let size = 16*16;
let grids = [];
for(let i=0; i<size; i++){
    grids.push({
        id: i
    })
}
const container = document.querySelector("#container")

function rendergrid(){
    const gridarray = grids.map(grid => `
    <div class="grid" data-id="${grid.id}" onclick="clickfunction(${grid.id})" onmousedown="clickfunction(${grid.id})"> </div>`);

    container.innerHTML = gridarray.join(``);
    console.log(container)
}

function clickfunction(dataid){
    const clicked = document.querySelector(`[data-id='${dataid}']`);
    clicked.style.backgroundColor = "#333";
    
}


rendergrid();
