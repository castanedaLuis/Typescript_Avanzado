import axios from "axios";
import { Product } from './app/models/product.model'


import { Category } from './app/models/category.model';


export class BaseHttpService<T> {

    constructor(
      private url: string
    ){}
  
    async getAll(){
      const { data } = await axios.get<T[]>(this.url);
      return data;
    }

    // <ID, DTO>  Es una forma de decirle que tipo de dato va a recibir la función o que que tipo va a manejar para que no infiera 
    async update<ID, DTO>(id: ID, changes: DTO) {
        const { data } = await axios.put(`${this.url}/${id}`, changes);
        return data;
      }
  }


  const service = new BaseHttpService<string>('https://localhost');

  service.getAll();

  

  const serviceProduct = new BaseHttpService<Product>('https://localhost');
  serviceProduct.getAll();
  serviceProduct.update<Product['id'], Object>(1, {
    title: 'asa',
  });