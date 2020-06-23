import { stateChanger, blueFood, giveLight, hydrate, storeState, initialPlantState, giveName, waterRentention, soilBoost, canCharge } from './../src/plant.js';

test('verifies things', function () {
  const tree = storeState(initialPlantState);
  const testTree = tree(blueFood);
  const thisTree = {light: 0, soil: 5, water: 0}
  expect((testTree).toEqual(thisTree));
});