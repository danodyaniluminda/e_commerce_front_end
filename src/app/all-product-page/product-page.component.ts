import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product, HOME_PRODUCT_DATA } from "../home/home-product.mode";
import { CartService } from "../service/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-products-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  products: Product[] = HOME_PRODUCT_DATA;
  @ViewChild('quantity') quantityInput!: ElementRef<HTMLInputElement>;
  ngOnInit(): void {
  }
  constructor(private cartService: CartService, private router: Router) { }

  ngAfterViewInit(): void {
    // Ensure that quantityInput is defined before accessing it
    if (this.quantityInput) {
      // You can safely access quantityInput here
    }
  }

  AddProduct(id: number) {
    this.cartService.AddProductToCart(id);
  }

  // addToCart(id: number) {
  //   console.log(id)
  //   const quantityValue = parseInt(this.quantityInput.nativeElement.value, 10);
  //   this.cartService.AddProductToCart(id, quantityValue);
  // }

  shopNow(product: any) {
    // Logic for shopping now, assuming product has an ID property
    this.router.navigate(['/product', product.id]);
  }


}
