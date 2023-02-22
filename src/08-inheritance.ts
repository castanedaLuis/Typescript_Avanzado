export class Animal {
    constructor(public name: string) {}
  
    move() {
      console.log('Moving along!');
    }
  
    greeting() {
      return `Hello, I'm ${this.name}`;
    }
  }
  
  export class Dog extends Animal { //Herencia
  
    constructor(
      name: string,
      public owner: string
    ) {
      super(name); //Hacemos referencia al constructor del padre
    }
  
    woof(times: number): void { //Metodo par aladrar
      for (let index = 0; index < times; index++) {
        console.log('woof!');
      }
    }

  }
  
  const fifi = new Animal('fifi');
  fifi.move();
  console.log(fifi.greeting());
  
  const cheis = new Dog('cheis', 'Luis');
  cheis.move();
  console.log(cheis.greeting());
  cheis.woof(5);
  console.log(cheis.owner);