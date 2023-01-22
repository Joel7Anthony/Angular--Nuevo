import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CreateProductDto, ProductModel, UpdateProductDto } from '../entities/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpServiceService {
  readonly API_URL ="https://api.escuelajs.co/api/v1/products";

  constructor(private httpClient: HttpClient) {}

  getAll(){
    const url = `${this.API_URL}`;
    return this.httpClient.get(url);
  }

  getOne(id:number){
    const url =`${this.API_URL}/${id}`;
    return this.httpClient.get(url);
  }

  store(product:CreateProductDto){
    const url = `${this.API_URL}`;
    return this.httpClient.post(url, product)
  }

  update(id:number, product:UpdateProductDto){
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put(url, product)
  }

  destroy(id:number){
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete(url)
  }
}