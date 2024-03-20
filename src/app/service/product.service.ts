import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from "../environments/environment";
import {ProductData,} from "../add-products/product-model.component";
import {HOME_PRODUCT_DATA, Product, serverResponse} from "../home/home-product.mode";
// import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.server_url;

  constructor(private http: HttpClient) {
  }

  getAllProducts(limitOfResults=10): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'products', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }

  // getSingleProduct(id: number): Observable<Product> {
  //   return this.http.get<Product>(this.url + 'all-products/' + id);
  // }


  getSingleProduct(id: number | undefined): Observable<Product> {
    // Mocking the behavior of fetching a single product by ID
    const product = HOME_PRODUCT_DATA.find(prod => prod.id === id);
    if (product) {
      return of(product); // Return an observable of the found product
    } else {
      throw new Error(`Product with ID ${id} not found`); // Throw an error if the product is not found
    }
  }

  getProductsFromCategory(catName: String): Observable<ProductData[]> {
    return this.http.get<ProductData[]>(this.url + 'products/category/' + catName);
  }
}
