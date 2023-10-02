import Island from './classes/Island.js';

const btnAddIsland = document.getElementById('btnAddIsland');

btnAddIsland.addEventListener('click', () => {
    const island = new Island();
    island.add();
});