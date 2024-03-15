import {ProductData} from "../add-products/product-model.component";

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  rating: number[];
  quantity: number;
  productDesc: string;
  status: string;
  color: string;
  size: string;
  discount: number;
  serialNumber: string;
  itemLocation: string;


}
export const HOME_PRODUCT_DATA: Product[] = [


  {
    id: 1,
    name: 'Laptop Collection',
    imageUrl: './../../../assets/img/shop01.png',
    price: 999,
    rating: [4.5],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A"
  },
  {
    id: 2,
    name: 'Accessories Collection',
    imageUrl: './../../../assets/img/shop02.png',
    price: 49,
    rating: [4.2],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A"
  },
  {
    id: 3,
    name: 'Cameras Collection',
    imageUrl: './../../../assets/img/shop03.png',
    price: 399,
    rating: [4.8],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A"
  },

  {
    id: 3,
    name: 'Cameras Collection',
    imageUrl: './../../../assets/img/shop03.png',
    price: 399,
    rating: [4.8],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A"
  },
  {
    id: 3,
    name: 'Cameras Collection',
    imageUrl: './../../../assets/img/shop03.png',
    price: 399,
    rating: [4.8],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A"
  },
  {
    id: 3,
    name: 'Cameras Collection',
    imageUrl: './../../../assets/img/shop03.png',
    price: 399,
    rating: [4.8],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A"
  },
  {
    id: 3,
    name: 'Cameras Collection',
    imageUrl: './../../../assets/img/shop03.png',
    price: 399,
    rating: [4.8],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A"
  },
  {
    id: 3,
    name: 'Cameras Collection',
    imageUrl: './../../../assets/img/shop03.png',
    price: 399,
    rating: [4.8],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A"
  },
  {
    id: 3,
    name: 'Cameras Collection',
    imageUrl: './../../../assets/img/shop03.png',
    price: 399,
    rating: [4.8],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A"
  },
  {
    id: 3,
    name: 'Cameras Collection',
    imageUrl: './../../../assets/img/shop03.png',
    price: 399,
    rating: [4.8],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A"
  },
  {
    id: 3,
    name: 'Cameras Collection',
    imageUrl: './../../../assets/img/shop03.png',
    price: 399,
    rating: [4.8],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A"
  },
  {
    id: 3,
    name: 'Cameras Collection',
    imageUrl: './../../../assets/img/shop03.png',
    price: 399,
    rating: [4.8],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A"
  },
  {
    id: 3,
    name: 'Cameras Collection',
    imageUrl: './../../../assets/img/shop03.png',
    price: 399,
    rating: [4.8],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A"
  },
  {
    id: 3,
    name: 'Cameras Collection',
    imageUrl: './../../../assets/img/shop03.png',
    price: 399,
    rating: [4.8],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A"
  },
  {
    id: 3,
    name: 'Cameras Collection',
    imageUrl: './../../../assets/img/shop03.png',
    price: 399,
    rating: [4.8],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A"
  },
]


export interface serverResponse  {
  count: number;
  products: Product[]
}
