import World from './classes/World.js';

const world = new World();
const btnAddIsland = document.getElementById('btnAddIsland');

btnAddIsland.addEventListener('click', () => {
    world.addIsland();
});