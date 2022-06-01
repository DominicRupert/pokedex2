// import { ValuesController } from "./Controllers/ValuesController.js";
import { MonsController } from "./Controllers/MonsController.js";
class App {
  // valuesController = new ValuesController();
  monsController = new MonsController();
}

window["app"] = new App();
