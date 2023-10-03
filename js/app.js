import World from './classes/World.js';

const world = new World();

const btnAddIsland = document.getElementById('btnAddIsland');
const btnSave = document.getElementById('btnSave');
const btnLoad = document.getElementById('btnLoad');

btnAddIsland.addEventListener('click', () => {
  world.addIsland();
});

btnSave.addEventListener('click', () => {
  world.save();
});

btnLoad.addEventListener('click', () => {
  world.load();
});