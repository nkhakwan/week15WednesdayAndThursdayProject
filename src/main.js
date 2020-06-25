import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { stateChanger, blueFood, giveLight, hydrate, storeState, initialPlantState, giveName, waterRentention, soilBoost, canCharge } from "./plant.js";
import { sstoreState, cchangeState, iinitialPlantState} from "./plant2.js";

$(document).ready(function () {
  
  const tree = storeState(initialPlantState);
  const shrub = storeState(initialPlantState);
  const flower = storeState(initialPlantState);
  
  $("#feed").click(function () {
    var radioValue = $("input[name='plant-choice']:checked").val();
    
    console.log("||||||||||||||||||||||||||||||||||||||||||||||we are in the loop");
    
     const anyVariable = sstoreState(iinitialPlantState); // [1, 3, 7, 9, 11]
     const oneMoreVariable = cchangeState(4)(99);
     console.log(`||||||||||||||||||||||||||||||||||||||||| ${anyVariable(oneMoreVariable)}`);

    // const theTreeSays = thisTreeName.ability;
    // console.log(theTreeSays);
    //console.log(thisTreeName.name);

    let temp;
    switch (radioValue) {
      case "tree":
        temp = tree;
      break;
      case "shrub":
        temp = shrub;
      break;
      case "flower":
        temp = flower;
      break;
      default:
      break;
    }
    
    const thisPlant = temp(blueFood);
    
    $("#"+ radioValue + "-soil-value").text(thisPlant.soil);
  });

  $("#hydrate").click(function () {
    var radioValue = $("input[name='plant-choice']:checked").val();

    let temp;
    switch (radioValue) {
      case "tree":
        temp = tree;
      break;
      case "shrub":
        temp = shrub;
      break;
      case "flower":
        temp = flower;
      break;
      default:
      break;
    }
    
    const thisPlant = temp(hydrate);
    $("#"+ radioValue + "-water-value").text(thisPlant.water);
  });

  $("#giveLight").click(function () {
    var radioValue = $("input[name='plant-choice']:checked").val();

    let temp;
    switch (radioValue) {
      case "tree":
        temp = tree;
      break;
      case "shrub":
        temp = shrub;
      break;
      case "flower":
        temp = flower;
      break;
      default:
      break;
    }
    
    const thisPlant = temp(giveLight);
    $("#"+ radioValue + "-light-value").text(thisPlant.light);
  });
});