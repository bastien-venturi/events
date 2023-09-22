const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = () => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

 

let main = document.querySelector('main');
let sectionnew = main.children[0];
let sectionsquare = main.children[1];
let sectionlog = main.children[2];
let ul = sectionlog.querySelector('ul');

function greensquare() {
    let newgreen = document.createElement('div');
    newgreen.classList.add('actionsquare', 'green');
    sectionnew.appendChild(newgreen);
    
    let squarelog = document.createElement('li');
    squarelog.textContent = getElapsedTime() + ' '+'green';
    ul.appendChild(squarelog);
}

function violetsquare() {
    let newviolet = document.createElement('div');
    newviolet.classList.add('actionsquare', 'violet');
    sectionnew.appendChild(newviolet);
    
    let squarelog = document.createElement('li');
    squarelog.textContent = getElapsedTime() + ' '+'violet';
    ul.appendChild(squarelog);
}

function orangesquare() {
    let neworange = document.createElement('div');
    neworange.classList.add('actionsquare', 'orange');
    sectionnew.appendChild(neworange);
    
    let squarelog = document.createElement('li');
    squarelog.textContent = getElapsedTime() + ' '+'orange';
    ul.appendChild(squarelog);
}


let buttongreen = document.querySelector('.actionsquare.green');
buttongreen.addEventListener('click', greensquare);

let buttonviolet = document.querySelector('.actionsquare.violet');
buttonviolet.addEventListener('click', violetsquare);

let buttonorange = document.querySelector('.actionsquare.orange');
buttonorange.addEventListener('click', orangesquare);


function randcolor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
    }

/*let spacebar = document.body.style.backgroundColor;
spacebar.addEventListener('space', randcolor);
*/

document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
        document.body.style.backgroundColor = randcolor();
        event.textContent = getElapsedTime() + 'SPACE !!!';
    }
  });

  




  
  


