import { Component, OnInit } from '@angular/core';
import {HttpClient as HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
 constructor( private httpClient: HttpClient) {
  
 };
 getProducts(): void{
  const reponse = this.httpClient.get("api.escuelajs.co/api/v1/products").subscribe(response => {
    console.log(reponse);
  })
  console.log(reponse);
 }
 ngOnInit():void {
  this.getProducts();
 };
}
