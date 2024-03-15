import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../service/product.service";
import { Product, HOME_PRODUCT_DATA } from "../home/home-product.mode";
import { catchError } from "rxjs/operators";
import {error} from "jquery";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-view-add-products-page',
  templateUrl: './view-product-page.component.html',
  styleUrls: ['./view-product-page.component.css']
})
export class ViewProductPageComponent implements OnInit {
  product: Product[] = HOME_PRODUCT_DATA;
  productId: number | null = null;
  mainImage: string;
  @ViewChild('galleryImages') galleryImages: ElementRef;

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.productId = +id; // Convert id to number
        this.getProduct(this.productId);
        console.log(this.product)
      }
    });
  }

  getProduct(id: number) {
    this.productService.getSingleProduct(id)
      .pipe(
        catchError(error => {
          console.error(error);
          throw error;
        })
      )
      .subscribe(
        (product: Product) => {
          this.product = [product];
        },
        (error) => {
          console.error(error);
        }
      );
  }

  addToCart(id: number) {
    this.cartService.AddProductToCart(id);
  }

  setMainImage(imageUrl: string) {
    this.mainImage = imageUrl; // Set the main image to the clicked gallery image
  }

  scrollGallery(direction: number) {
    const gallery = this.galleryImages.nativeElement;
    const scrollAmount = 200; // Adjust scroll amount as needed

    if (direction === 1) {
      gallery.scrollLeft += scrollAmount;
    } else {
      gallery.scrollLeft -= scrollAmount;
    }
  }

  protected readonly error = error;
}
