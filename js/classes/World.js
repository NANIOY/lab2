import Island from '../classes/Island.js';

export default class World {
  constructor() {
    this.islands = []; // a good place to keep track of your islands
    this.hookEvents(); // let's kick things of by hooking up events
  }

  hookEvents() {
    const btnAddIsland = document.getElementById('btnAddIsland');

    btnAddIsland.addEventListener('click', () => {
      this.addIsland();
    });

  }

  save() {
    // save array islands to localstorage as string
    // loop over all this.islands and save the names
  }

  load() {
    // load islands from localstorage into array
    // loop over the array and addIslands()
  }

  getCoordinates() {
    // return coordinates within the screen at random, feel free to change it up!
    let randomSign = Math.random() < 0.5 ? -1 : 1;
    return {
      x: ((Math.random() * window.innerWidth) / 2) * randomSign,
      y: ((Math.random() * window.innerHeight) / 2) * randomSign
    };
  }

  addIsland() {
    // create a new HTML element to represent the island
    const islandElement = document.createElement('div');

    // add the "island" class to the island element
    islandElement.classList.add('island');

    // get random coordinates using the getCoordinates() method
    const { x, y } = this.getCoordinates();

    // set initial position to the center of the screen
    islandElement.style.transform = `translate(-50%, -50%)`;

    // create new island instance to get random name and color
    const island = new Island();

    // set random island name as inner text of element
    islandElement.innerText = island.getRandomName();

    // set island color as background color of element
    islandElement.style.backgroundColor = island.getRandomColor();

    // add the island element to the DOM
    document.body.appendChild(islandElement);

    // add the island element to the islands array for tracking
    this.islands.push(islandElement);

    // move island to random coordinates
    this.moveIsland(islandElement, x, y);
  }


  moveIsland(island, x, y) {
    // define animation to move island to random coordinates
    island.animate([
      { transform: 'translate(-50%, -50%)', opacity: 0 },
      { opacity: 1 },
      { transform: `translate(${x}px, ${y}px)`, opacity: 1 },
    ], {
      duration: 1000,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
  }
}