import axios from "axios";
import { Product } from './app/models/product.model'

export class BaseHttpService<T> {

    constructor(
      private url: string
    ){}
  
    async getAll(){
      const { data } = await axios.get<T[]>(this.url);
      return data;
    }
  }


  const service = new BaseHttpService<number>('https://localhost');

  service.getAll();
  

  const serviceProduct = new BaseHttpService<Product>('https://localhost');
  serviceProduct.getAll();