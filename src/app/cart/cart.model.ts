import {ProductData} from "../add-products/product-model.component";
import {Product} from "../home/home-product.mode";

export interface CartModelServer {
  total: number;
  data: [{
    product: Product,
    numInCart: number
  }];
}

export interface CartModelPublic {
  total: number;
  prodData: [{
    id: number,
    incart: number
  }]
}
// export const SAMPLE_CART_DATA: CartModelServer = {
//   total: 1,
//   data: [
//     {
//       product: {
//         id: 2,
//         name: 'Accessories Collection',
//         imageUrl: './../../../assets/img/shop02.png',
//         price: 49,
//         rating: [4.2],
//         quantity: 10,
//         productDesc: "Description of Product 1",
//         status: "Available",
//         color: "Red",
//         size: "Large",
//         discount: 10,
//         serialNumber: "SN123456",
//         itemLocation: "Warehouse A"
//       },
//       numInCart: 10 //quantity
//     }
//   ]
// };
