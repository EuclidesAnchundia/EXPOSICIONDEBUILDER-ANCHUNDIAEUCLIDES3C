import { Car } from "./builder";
import { CarBuilder } from "./builder";

// Uso del builder para crear un objeto Car
const car = Car.getBuilder()
  .setBrand("Toyota")
  .setModel("Corolla")
  .setColor("Blue")
  .setYear(2022)
  .build();

  console.log("Marca");
console.log(car.getBrand()); // Imprime: Toyota
  console.log("Modelo");
console.log(car.getModel()); // Imprime: Corolla
  console.log("Color");
console.log(car.getColor()); // Imprime: Blue
  console.log("Año");
console.log(car.getYear()); // Imprime: 2022

car.startEngine(); // Imprime: Motor Arracando.
car.accelerate(100); // Imprime: Acelerando a 100 km/h.
car.brake(); // Imprime: Frenado.