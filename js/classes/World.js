import Island from '../classes/Island.js';

export default class World {
  constructor() {
    this.islands = []; // a good place to keep track of your islands
    this.hookEvents(); // let's kick things of by hooking up events
  }

  hookEvents() {
    const btnAddIsland = document.getElementById('btnAddIsland');
    const btnSave = document.getElementById('btnSave');
    const btnLoad = document.getElementById('btnLoad');

    btnAddIsland.addEventListener('click', () => {
      this.addIsland();
    });

    btnSave.addEventListener('click', () => {
      this.save();
    });

    btnLoad.addEventListener('click', () => {
      this.load();
    });
  }

  save() {
    // convert islands array to JSON string
    const islandsJSON = JSON.stringify(this.islands.map(islandElement =>
    ({
      name: islandElement.innerText,
      color: islandElement.style.backgroundColor,
      transform: islandElement.style.transform
    })
    ));

    // save JSON string to localstorage
    localStorage.setItem('islandsJSON', islandsJSON);
  }

  load() {
    // load json string from localstorage
    const islandsJSON = localStorage.getItem('islandsJSON');

    if (islandsJSON) {
      // parse JSON string back into an array of island data
      const islandData = JSON.parse(islandsJSON);

      // clear current islands from the DOM and islands array
      this.islands.forEach((islandElement) => {
        islandElement.remove();
      });
      this.islands = [];

      // add islands based on loaded data
      islandData.forEach((island) => {
        const islandElement = document.createElement('div');
        islandElement.classList.add('island');
        islandElement.innerText = island.name;
        islandElement.style.backgroundColor = island.color;

        // set the transform property directly from loaded data
        islandElement.style.transform = island.transform;

        document.body.appendChild(islandElement);
        this.islands.push(islandElement);
      });
    }
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

    // create new island instance to get random name and color
    const island = new Island();

    // set random island name as inner text of element
    islandElement.innerText = island.getRandomName();

    // set island color as background color of element
    islandElement.style.backgroundColor = island.getRandomColor();

    // Get random coordinates using the getCoordinates() method
    const { x, y } = this.getCoordinates();

    // Set initial position to the stored transform property or random coordinates
    islandElement.style.transform = island.transform || `translate(${x}px, ${y}px)`;

    // add the island element to the DOM
    document.body.appendChild(islandElement);

    // add the island element to the islands array for tracking
    this.islands.push(islandElement);

    // move island to random coordinates if not already in stored position
    if (!island.transform) {
      this.moveIsland(islandElement, x, y);
    }
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