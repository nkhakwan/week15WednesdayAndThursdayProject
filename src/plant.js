const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}


export const giveLight = changeState("light")(4);

export const hydrate = changeState("water")(3);

export const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const yuckyFood = changeState("soil")(-5);

export const initialPlantState = {light: 0, soil: 0, water: 0}

export const storeState = (initialPlantState) => {
  let currentState = initialPlantState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

export const stateChanger = storeState();

//const newgoofyplant3 = goofyPlantstateChanger(blueFood);

// Plant abilities
const canCharge = (sunflower) => ({
  charge: () => {
    return `The ${sunflower.name} charges up`
  }
});

// Shrub
const soilBoost = (shrub) => ({
  endure: () => {
    return `The ${shrub.name} soil fertility increases`
  }
});

// Tree
const waterRentention = (tree) => ({
  absorb: () => {
    return `The ${tree.name} water supply is bolstered`
  }
});
