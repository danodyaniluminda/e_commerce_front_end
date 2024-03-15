import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";
import {ProductData, serverResponse} from "../add-products/product-model.component";
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

  getSingleProduct(id: Number): Observable<ProductData> {
    return this.http.get<ProductData>(this.url + 'products/' + id);
  }

  getProductsFromCategory(catName: String): Observable<ProductData[]> {
    return this.http.get<ProductData[]>(this.url + 'products/category/' + catName);
  }
}
