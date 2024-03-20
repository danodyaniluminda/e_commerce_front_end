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
  @ViewChild('quantity') quantityInput!: ElementRef;
  product: Product[] = HOME_PRODUCT_DATA;
  productId: number | null = null;
  mainImage: string;
  @ViewChild('galleryImages') galleryImages: ElementRef;
  averageRating: number;
  starIcons: ('full' | 'half' | 'empty')[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
//for average rating
    this.calculateAverageRating();
    this.starIcons = this.getStarIcons(this.averageRating);
    console.log(this.getStarIcons(this.averageRating));

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

  addToCart(id: number | undefined) {
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

  AddProduct(id: number) {
    this.cartService.AddProductToCart(id);
  }

  protected readonly error = error;

  Increase() {
    let value = parseInt(this.quantityInput.nativeElement.value);
    if (this.product.length > 0 && this.product[0].quantity >= 1) {
      value++;

      if (value > this.product[0].quantity) {
        value = this.product[0].quantity;
      }
    } else {
      return;
    }

    this.quantityInput.nativeElement.value = value.toString();
  }

    Decrease() {
    let value = parseInt(this.quantityInput.nativeElement.value);
    if (this.product[0].quantity > 0){
      value--;

      if (value <= 0) {
        // @ts-ignore
        value = 0;
      }
    } else {
      return;
    }
    this.quantityInput.nativeElement.value = value.toString();
  }
  changeMainImage(imageUrl: string) {
    // Check if the clicked image is different from the current main image
    if (imageUrl !== this.mainImage) {
      this.mainImage = imageUrl;
      console.log("Clicked image URL:", imageUrl); // Log the clicked image URL to the console
    }
  }
//average rating calculation
  calculateAverageRating(): void {
    const total = this.product[0].rating.reduce((acc, curr) => acc + curr, 0);
    this.averageRating = total / this.product[0].rating.length;
    console.log('Average Rating:', this.averageRating);
  }

  // Function to generate star icons based on the average rating
  getStarIcons(avgRating: number): ('full' | 'half' | 'empty')[] {
    const stars: ('full' | 'half' | 'empty')[] = [];
    const fullStars = Math.floor(avgRating);
    const hasHalfStar = avgRating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push('full');
      } else if (i === fullStars && hasHalfStar) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }

    return stars;
  }
}
