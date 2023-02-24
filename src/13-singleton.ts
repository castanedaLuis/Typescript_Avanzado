/**
 * Singleton Nos cuida que no creemos multiples instacias de un mismo objeto.
 * Creamos una unica vez y des ahí lo compartimos a toda la app
 */


export class MyService {

    static instance: MyService | null = null; // declaramos una instancia que pueda ser null
  
    private constructor(private name: string) {}
  
    getName() {
      return this.name;
    }
  
    static create(name: string) {
      if (MyService.instance === null) { // verificamos si es null
        console.log('debería entrar una vez');
        MyService.instance = new MyService(name);  // si es null, creamos la instancia
      }
      return MyService.instance;
    }

  }
  
  const myService1 = MyService.create('service 1');
  console.log(myService1.getName());
  const myService2 = MyService.create('service 2');  //aun que creemos variosn MyService, solo crea una
  console.log(myService2.getName());
  const myService3 = MyService.create('service 3');
  console.log(myService3.getName());
  
  console.log(myService1 === myService2); // verifica que es la misma instamcia