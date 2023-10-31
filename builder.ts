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
