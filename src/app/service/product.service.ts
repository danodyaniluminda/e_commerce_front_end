import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";
import {ProductData} from "../product/product-model.component";
// import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private apiUrl = 'http://localhost:8080/api/products';
  //
  // constructor(private http: HttpClient) { }
  //
  // // Get all products
  // getAllProducts(): Observable<ProductData[]> {
  //   return this.http.get<ProductData[]>(this.apiUrl);
  // }
  //
  // // Get product by ID
  // getProductById(productId: number): Observable<ProductData> {
  //   const url = `${this.apiUrl}/${productId}`;
  //   return this.http.get<ProductData>(url);
  // }
  //
  // // Add a new product
  // addProduct(productData: ProductData): Observable<ProductData> {
  //   return this.http.post<ProductData>(this.apiUrl, productData);
  // }
  //
  // // Update an existing product
  // updateProduct(productId: number, productData: ProductData): Observable<ProductData> {
  //   const url = `${this.apiUrl}/${productId}`;
  //   return this.http.put<ProductData>(url, productData);
  // }
  //
  // // Delete a product
  // deleteProduct(productId: number): Observable<void> {
  //   const url = `${this.apiUrl}/${productId}`;
  //   return this.http.delete<void>(url);
  // }
}
