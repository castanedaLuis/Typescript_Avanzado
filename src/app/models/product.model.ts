/**
 * Creando rqpido el tipado de la repsuesta de la API con https://quicktype.io/
 */
import { Category } from './category.model';

export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  images:      string[];
}