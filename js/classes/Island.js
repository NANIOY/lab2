export default class Island {
  constructor(name) {}

  getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  remove() {
    // JS animations api, fade out
    // remove the element when the animation ended
  }

  getRandomName() {
    // array with 10 random island names
    const names = [
      "Palmtree beach",
      "Sandy beach",
      "Tropical beach",
      "Palm beach",
      "Sunny beach",
      "Paradise beach",
      "Sunny island",
      "Tropical island",
      "Palm island",
      "Paradise island"
    ];

    return names[Math.floor(Math.random() * names.length)];
  }

  add() {
    // create a new element
    const island = document.createElement("div");

    // add a class to the element
    island.classList.add("island");

    // add a random name to the element
    island.innerHTML = this.getRandomName();

    // add a random color to the element
    island.style.backgroundColor = this.getRandomColor();

    // set initial position to the center of the screen
    island.style.transform = "translate(-50%, -50%)";

    // animate the element to a random position
    island.animate(
      [
        {
          // start position in center of the screen
          transform: "translate(-50%, -50%)"
        },
        {
        // random end positin anywhere in the viewport
        transform: `translate(${(Math.random() * 200 - 100)}vw, ${(Math.random() * 200 - 100)}vh)`
        }
      ],
      {
        // timing options
        duration: 1000,
        iterations: 1,
        fill: "forwards"
      }
    );

    // add the element to the DOM
    document.body.appendChild(island);
  }
}
