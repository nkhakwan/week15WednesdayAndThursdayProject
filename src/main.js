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

    const thisTree = tree(blueFood);
    $("#soil-value").text(thisTree.soil);
  });

  $("#hydrate").click(function () {

    const thisTree = tree(hydrate);
    $("#water-value").text(thisTree.water);
    // const newState = stateChanger(hydrate);
    // $("#water-value").text(newState.water);
  });

  $("#giveLight").click(function () {
    const thisTree = tree(giveLight);
    $("#light-value").text(thisTree.light);

  });
});