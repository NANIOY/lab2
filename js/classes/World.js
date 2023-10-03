import Island from '../classes/Island.js';

export default class World {
  constructor() {
    this.islands = []; // a good place to keep track of your islands
    this.hookEvents(); // let's kick things of by hooking up events
  }

  hookEvents() {
    // hook events like clicking buttons to a specific function

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
    // Create a new HTML element to represent the island
    const islandElement = document.createElement('div');

    // Add the "island" class to the island element
    islandElement.classList.add('island');
    
    // Get random coordinates using the getCoordinates() method
    const { x, y } = this.getCoordinates();

    // Set initial position to the random coordinates
    islandElement.style.transform = `translate(${x}px, ${y}px)`;

    // Animate the element to a random position
    islandElement.animate(
      [
        {
          transform: `translate(${x}px, ${y}px)`
        },
        {
          // Add animation targets as needed
        }
      ],
      {
        duration: 1000,
        iterations: 1,
        fill: "forwards"
      }
    );

    // Add the island element to the DOM
    document.body.appendChild(islandElement);

    // Add the island element to the islands array for tracking
    this.islands.push(islandElement);
  }


  moveIsland(island) {
    // this might be a good point to animate the islands with JS Animations API
  }
}
