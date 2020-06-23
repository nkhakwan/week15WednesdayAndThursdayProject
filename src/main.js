import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { stateChanger } from "./plant.js";
import { blueFood } from "./plant.js";
import { giveLight } from "./plant.js";
import { hydrate } from "./plant.js";

$(document).ready(function () {
  $("#feed").click(function () {
    const newState = stateChanger(blueFood);
    $("#soil-value").text(newState.soil);
  });

  $("#hydrate").click(function () {
    const newState = stateChanger(hydrate);
    $("#water-value").text(newState.water);
  });

  $("#giveLight").click(function () {
    const newState = stateChanger(giveLight);
    $("#light-value").text(newState.light);
  });
});