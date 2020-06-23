import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { stateChanger, blueFood, giveLight, hydrate, storeState, initialPlantState } from "./plant.js";

$(document).ready(function () {

  const tree = storeState(initialPlantState);
  const shrub = storeState(initialPlantState);
  const flower = storeState(initialPlantState);
  
  $("#feed").click(function () {
    var radioValue = $("input[name='plant-choice']:checked").val();

    console.log(radioValue);

    
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
    console.log(radioValue);
    // const thisTree = tree(hydrate);
    // $("#tree-water-value").text(thisTree.water);


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


    // const newState = stateChanger(hydrate);
    // $("#water-value").text(newState.water);
  });

  $("#giveLight").click(function () {
    var radioValue = $("input[name='plant-choice']:checked").val();
    console.log(radioValue);
    // const thisTree = tree(giveLight);
    // $("#tree-light-value").text(thisTree.light);
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