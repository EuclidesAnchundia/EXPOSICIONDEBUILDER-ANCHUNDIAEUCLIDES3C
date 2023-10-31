/*
ESTE APARTADO ES ESTO: Concepto del patrón de diseño y tipo de patrón (Estructural, 
de comportamiento o creacionales) esta en el word.



El patrón de diseño "Builder" es un patrón creacional que se utiliza para construir
objetos complejos paso a paso. Proporciona una forma flexible de crear diferentes 
representaciones de un objeto utilizando el mismo proceso de construcción. 
El objetivo principal del patrón Builder es separar la construcción de un objeto de su representación, 
de modo que el mismo proceso de construcción pueda crear diferentes representaciones.

El patrón de diseño Builder se considera un patrón creacional porque se enfoca en la creación de objetos, 
permitiendo crear estructuras complejas mediante la construcción de partes individuales y luego ensamblándolas en un objeto final. 
A diferencia de otros patrones de diseño creacionales como el patrón Singleton o el patrón Factory, 
el patrón Builder se centra en la construcción paso a paso de objetos más complejos.

En cuanto al tipo de patrón de diseño, el patrón Builder se clasifica como un patrón creacional. 
Los patrones creacionales se centran en la forma en que los objetos son instanciados y creados, 
proporcionando mecanismos flexibles para la creación de objetos en diferentes situaciones. 
El patrón Builder en particular se utiliza cuando se requiere construir objetos complejos con 
múltiples partes y configuraciones posibles.

*/

export class Car {
  public brand: string;
  public model: string;
  public color: string;
  public year: number;

  constructor(brand: string, model: string, color: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
  }

  // Método estático que devuelve una instancia de CarBuilder
  public static getBuilder(): CarBuilder {
    return new CarBuilder();
  }

  public getBrand(): string {
    return this.brand;
  }

  public getModel(): string {
    return this.model;
  }

  public getColor(): string {
    return this.color;
  }

  public getYear(): number {
    return this.year;
  }

  public startEngine(): void {
    console.log("Arrancando motor.");
  }

  public accelerate(speed: number): void {
    console.log(`Acelerando a ${speed} km/h.`);
  }

  public brake(): void {
    console.log("Frenando.");
  }
}

export class CarBuilder {
  private car: Car;

  constructor() {
    // Se crea una instancia de Car con valores predeterminados
    this.car = new Car("Toyota", "Hilux", "Azul", 2023);
  }

  public setBrand(brand: string): CarBuilder {
    // Establece la marca del automóvil en el builder
    this.car.brand = brand;
    return this;
  }

  public setModel(model: string): CarBuilder {
    // Establece el modelo del automóvil en el builder
    this.car.model = model;
    return this;
  }

  public setColor(color: string): CarBuilder {
    // Establece el color del automóvil en el builder
    this.car.color = color;
    return this;
  }

  public setYear(year: number): CarBuilder {
    // Establece el año del automóvil en el builder
    this.car.year = year;
    return this;
  }

  public build(): Car {
    // Devuelve el objeto Car construido con las propiedades establecidas en el builder
    return this.car;
  }
}