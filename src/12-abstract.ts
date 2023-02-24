/**
 * Para proteguer la clase padre y no poder instancear desde la clase padre
 * Solo desde clases hijos.
 * Se crea una abstracta pata despues crear algo especifico 
 */

import { Animal, Dog } from "./09-protected";

const animal = new Animal('elite');
animal.greeting();

const cheis = new Dog('cheis', 'nico');
cheis.greeting();
cheis.woof(2);