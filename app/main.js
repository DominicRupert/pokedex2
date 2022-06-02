// import { ValuesController } from "./Controllers/ValuesController.js";
import { MonsController } from "./Controllers/MonsController.js";
import {SbPokeController } from "./Controllers/SbPokeController.js";
class App {
  // valuesController = new ValuesController();
  monsController = new MonsController();
  sbPokeController = new SbPokeController();
}

window["app"] = new App();
