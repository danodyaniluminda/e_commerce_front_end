import {Component, OnInit} from '@angular/core';
import {CartModelServer} from "../../cart/cart.model";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent implements OnInit{
  // cartData: CartModelServer = {
  //   total: 0,
  //   data: [
  //     {
  //       product: {
  //         id: 1,
  //         name: 'Sample Product 1',
  //         image: 'path_to_your_image1.jpg',
  //         price: 10 // Sample price
  //         ,
  //         uploadPhoto: '',
  //         buyPrice: 0,
  //         sellPrice: 0,
  //         category: '',
  //         subCategory: '',
  //         brand: '',
  //         productDesc: '',
  //         status: '',
  //         color: '',
  //         size: '',
  //         returnPeriod: {
  //           months: 0,
  //           days: 0
  //         },
  //         itemLocation: '',
  //         discount: 0,
  //         specification: '',
  //         features: '',
  //         width: 0,
  //         height: 0,
  //         length: 0,
  //         serialNumber: '',
  //         hsCode: '',
  //         description: '',
  //         quantity: 0,
  //         images: ''
  //       },
  //       numInCart: 2 // Sample quantity
  //     }
  //   ]














  cartTotal: number= 0;
  constructor(public cartService: CartService) {
  }

  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", function() {
      var currentPath = window.location.pathname;
      var links = document.querySelectorAll(".main-nav li");

      links.forEach(function(link) {
        var anchor = link.querySelector("a");
        if (anchor) {
          var href = anchor.getAttribute("href");
          if (currentPath === href) {
            link.classList.add("active");
          }
        }
      });
    });



    // this.cartService.cartTotal$.subscribe(total => {
    //   this.cartTotal = total;
    // });
    //
    // this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
  }


}
