import { Dog } from './09-protected';

// function getValue(value: unknown) {
//   return value;
// }

// function getValue(value: string | number) {
//   return value;
// }
/**
 * TS va inferiri el tipado dependientdo de tipo qu ele pases
 * De igual forma le podemos decir cual tipo se va a manejar
 * El nombre puede ser cualquier cosa, comun mente se utiliza <T>
 */
function getValue<myType>(value: myType) {
  return value;
}

getValue<number>(1212).toFixed();
getValue<string>('1212').toLowerCase();
getValue<number[]>([1,1,1]).forEach;
const fifi = new Dog('fifi', 'nico');
getValue<Dog>(fifi).greeting