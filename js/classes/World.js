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
        position: islandElement.style.transform
      })
    ));
    
    // save JSON string to localstorage
    localStorage.setItem('islandsJSON', islandsJSON);
  }

  load() {
    // load json string from localstorage
    const islandsJSON = localStorage.getItem('islandsJSON');
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

    // set initial position to the random coordinates
    islandElement.style.transform = `translate(${x}px, ${y}px)`;

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
  }


  moveIsland(island) {
    // this might be a good point to animate the islands with JS Animations API
  }
}
