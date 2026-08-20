

const container = document.getElementById('card-container');

const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F3FF33',
    '#FF33F3', '#33FFF0', '#FFA500', '#800080',
    '#008080', '#FFC0CB', '#7FFF00', '#D2691E'
];

for (let i = 0; i < 12; i++) {

    const square = document.createElement('div');
    
   
    square.classList.add('square');
    square.setAttribute('style', `background-color: ${colors[i]}; `);
    
    container.appendChild(square);
}
