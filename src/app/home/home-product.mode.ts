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
  color: string ;
  size: string ;
  discount: number;
  serialNumber: string;
  itemLocation: string;
  thumbimages: string[];
  noReviews: number;
  brand: string;
  packageDimensions: {
    width: number;
    height: number;
    length: number;
  };
  specifications: string [];



}
export const HOME_PRODUCT_DATA: Product[] = [


  {
    id: 1,
    name: 'Laptop Collection',
    imageUrl: './../../../assets/img/shop01.png',
    price: 999,
    rating: [1, 1, 1, 0,1],
    quantity: 0,
    productDesc: "Everyday laptops give you the best range of exclusive usability features and a wide color choice. They are the best laptops for always-great affordability for everyone. ",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Sample Brand',
    packageDimensions: {
      width: 10,
      height: 5,
      length: 15
    },
    specifications: ['Spec 1', 'Spec 2', 'Spec 3']
  },
  {
    id: 2,
    name: 'Accessories Collection',
    imageUrl: './../../../assets/img/shop02.png',
    price: 49,
    rating: [1, 5, 1, 6,1],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Dell',
    packageDimensions: {
      width: 102,
      height: 51,
      length: 151
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Asus",
    packageDimensions: {
      width: 1012,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Apple",
    packageDimensions: {
      width: 112,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },
  {
    id: 1,
    name: 'Laptop Collection',
    imageUrl: './../../../assets/img/shop01.png',
    price: 999,
    rating: [1, 1, 1, 0,1],
    quantity: 0,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Sample Brand',
    packageDimensions: {
      width: 10,
      height: 5,
      length: 15
    },
    specifications: ['Spec 1', 'Spec 2', 'Spec 3']
  },
  {
    id: 2,
    name: 'Accessories Collection',
    imageUrl: './../../../assets/img/shop02.png',
    price: 49,
    rating: [1, 5, 1, 6,1],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Dell',
    packageDimensions: {
      width: 102,
      height: 51,
      length: 151
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Asus",
    packageDimensions: {
      width: 1012,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Apple",
    packageDimensions: {
      width: 112,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },
  {
    id: 1,
    name: 'Laptop Collection',
    imageUrl: './../../../assets/img/shop01.png',
    price: 999,
    rating: [1, 1, 1, 0,1],
    quantity: 0,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Sample Brand',
    packageDimensions: {
      width: 10,
      height: 5,
      length: 15
    },
    specifications: ['Spec 1', 'Spec 2', 'Spec 3']
  },
  {
    id: 2,
    name: 'Accessories Collection',
    imageUrl: './../../../assets/img/shop02.png',
    price: 49,
    rating: [1, 5, 1, 6,1],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Dell',
    packageDimensions: {
      width: 102,
      height: 51,
      length: 151
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Asus",
    packageDimensions: {
      width: 1012,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Apple",
    packageDimensions: {
      width: 112,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },
  {
    id: 1,
    name: 'Laptop Collection',
    imageUrl: './../../../assets/img/shop01.png',
    price: 999,
    rating: [1, 1, 1, 0,1],
    quantity: 0,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Sample Brand',
    packageDimensions: {
      width: 10,
      height: 5,
      length: 15
    },
    specifications: ['Spec 1', 'Spec 2', 'Spec 3']
  },
  {
    id: 2,
    name: 'Accessories Collection',
    imageUrl: './../../../assets/img/shop02.png',
    price: 49,
    rating: [1, 5, 1, 6,1],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Dell',
    packageDimensions: {
      width: 102,
      height: 51,
      length: 151
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Asus",
    packageDimensions: {
      width: 1012,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Apple",
    packageDimensions: {
      width: 112,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },
  {
    id: 1,
    name: 'Laptop Collection',
    imageUrl: './../../../assets/img/shop01.png',
    price: 999,
    rating: [1, 1, 1, 0,1],
    quantity: 0,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Sample Brand',
    packageDimensions: {
      width: 10,
      height: 5,
      length: 15
    },
    specifications: ['Spec 1', 'Spec 2', 'Spec 3']
  },
  {
    id: 2,
    name: 'Accessories Collection',
    imageUrl: './../../../assets/img/shop02.png',
    price: 49,
    rating: [1, 5, 1, 6,1],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Dell',
    packageDimensions: {
      width: 102,
      height: 51,
      length: 151
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Asus",
    packageDimensions: {
      width: 1012,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Apple",
    packageDimensions: {
      width: 112,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },
  {
    id: 1,
    name: 'Laptop Collection',
    imageUrl: './../../../assets/img/shop01.png',
    price: 999,
    rating: [1, 1, 1, 0,1],
    quantity: 0,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Sample Brand',
    packageDimensions: {
      width: 10,
      height: 5,
      length: 15
    },
    specifications: ['Spec 1', 'Spec 2', 'Spec 3']
  },
  {
    id: 2,
    name: 'Accessories Collection',
    imageUrl: './../../../assets/img/shop02.png',
    price: 49,
    rating: [1, 5, 1, 6,1],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Dell',
    packageDimensions: {
      width: 102,
      height: 51,
      length: 151
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Asus",
    packageDimensions: {
      width: 1012,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Apple",
    packageDimensions: {
      width: 112,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },
  {
    id: 1,
    name: 'Laptop Collection',
    imageUrl: './../../../assets/img/shop01.png',
    price: 999,
    rating: [1, 1, 1, 0,1],
    quantity: 0,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Sample Brand',
    packageDimensions: {
      width: 10,
      height: 5,
      length: 15
    },
    specifications: ['Spec 1', 'Spec 2', 'Spec 3']
  },
  {
    id: 2,
    name: 'Accessories Collection',
    imageUrl: './../../../assets/img/shop02.png',
    price: 49,
    rating: [1, 5, 1, 6,1],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Dell',
    packageDimensions: {
      width: 102,
      height: 51,
      length: 151
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Asus",
    packageDimensions: {
      width: 1012,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Apple",
    packageDimensions: {
      width: 112,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },
  {
    id: 1,
    name: 'Laptop Collection',
    imageUrl: './../../../assets/img/shop01.png',
    price: 999,
    rating: [1, 1, 1, 0,1],
    quantity: 0,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Sample Brand',
    packageDimensions: {
      width: 10,
      height: 5,
      length: 15
    },
    specifications: ['Spec 1', 'Spec 2', 'Spec 3']
  },
  {
    id: 2,
    name: 'Accessories Collection',
    imageUrl: './../../../assets/img/shop02.png',
    price: 49,
    rating: [1, 5, 1, 6,1],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Dell',
    packageDimensions: {
      width: 102,
      height: 51,
      length: 151
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Asus",
    packageDimensions: {
      width: 1012,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Apple",
    packageDimensions: {
      width: 112,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },
  {
    id: 1,
    name: 'Laptop Collection',
    imageUrl: './../../../assets/img/shop01.png',
    price: 999,
    rating: [1, 1, 1, 0,1],
    quantity: 0,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Sample Brand',
    packageDimensions: {
      width: 10,
      height: 5,
      length: 15
    },
    specifications: ['Spec 1', 'Spec 2', 'Spec 3']
  },
  {
    id: 2,
    name: 'Accessories Collection',
    imageUrl: './../../../assets/img/shop02.png',
    price: 49,
    rating: [1, 5, 1, 6,1],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Dell',
    packageDimensions: {
      width: 102,
      height: 51,
      length: 151
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Asus",
    packageDimensions: {
      width: 1012,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Apple",
    packageDimensions: {
      width: 112,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },
  {
    id: 1,
    name: 'Laptop Collection',
    imageUrl: './../../../assets/img/shop01.png',
    price: 999,
    rating: [1, 1, 1, 0,1],
    quantity: 0,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Sample Brand',
    packageDimensions: {
      width: 10,
      height: 5,
      length: 15
    },
    specifications: ['Spec 1', 'Spec 2', 'Spec 3']
  },
  {
    id: 2,
    name: 'Accessories Collection',
    imageUrl: './../../../assets/img/shop02.png',
    price: 49,
    rating: [1, 5, 1, 6,1],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Dell',
    packageDimensions: {
      width: 102,
      height: 51,
      length: 151
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Asus",
    packageDimensions: {
      width: 1012,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Apple",
    packageDimensions: {
      width: 112,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },
  {
    id: 1,
    name: 'Laptop Collection',
    imageUrl: './../../../assets/img/shop01.png',
    price: 999,
    rating: [1, 1, 1, 0,1],
    quantity: 0,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Sample Brand',
    packageDimensions: {
      width: 10,
      height: 5,
      length: 15
    },
    specifications: ['Spec 1', 'Spec 2', 'Spec 3']
  },
  {
    id: 2,
    name: 'Accessories Collection',
    imageUrl: './../../../assets/img/shop02.png',
    price: 49,
    rating: [1, 5, 1, 6,1],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Dell',
    packageDimensions: {
      width: 102,
      height: 51,
      length: 151
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Asus",
    packageDimensions: {
      width: 1012,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Apple",
    packageDimensions: {
      width: 112,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },
  {
    id: 1,
    name: 'Laptop Collection',
    imageUrl: './../../../assets/img/shop01.png',
    price: 999,
    rating: [1, 1, 1, 0,1],
    quantity: 0,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Sample Brand',
    packageDimensions: {
      width: 10,
      height: 5,
      length: 15
    },
    specifications: ['Spec 1', 'Spec 2', 'Spec 3']
  },
  {
    id: 2,
    name: 'Accessories Collection',
    imageUrl: './../../../assets/img/shop02.png',
    price: 49,
    rating: [1, 5, 1, 6,1],
    quantity: 10,
    productDesc: "Description of Product 1",
    status: "Available",
    color: "Red",
    size: "Large",
    discount: 10,
    serialNumber: "SN123456",
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: 'Dell',
    packageDimensions: {
      width: 102,
      height: 51,
      length: 151
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Asus",
    packageDimensions: {
      width: 1012,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },

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
    itemLocation: "Warehouse A",
    thumbimages:['./../../../assets/img/shop01.png','./../../../assets/img/shop02.png','./../../../assets/img/shop03.png'],
    noReviews: 5,
    brand: "Apple",
    packageDimensions: {
      width: 112,
      height: 511,
      length: 1511
    },
    specifications: ['Wireless LAN', 'Bluetooth', 'Backlight']
  },

]


export interface serverResponse  {
  count: number;
  products: Product[]
}
