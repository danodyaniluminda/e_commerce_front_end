import {ProductData} from "../add-products/product-model.component";

export interface CartModelServer {
  total: number;
  data: [{
    product: ProductData,
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
export const SAMPLE_CART_DATA: CartModelServer = {
  total: 1,
  data: [
    {
      product: {
        id: 1,
        name: 'Sample Product 1',
        image: './../../../assets/img/shop01.png',
        price: 10 // Sample price
        ,
        uploadPhoto: "",
        buyPrice: 0,
        sellPrice: 0,
        category: "",
        subCategory: "",
        brand: "",
        productDesc: "",
        status: "",
        color: "",
        size: "",
        returnPeriod: {
          months: 0,
          days: 0
        },
        itemLocation: "",
        discount: 0,
        specification: "",
        features: "",
        width: 0,
        height: 0,
        length: 0,
        serialNumber: "",
        hsCode: "",
        description: "",
        quantity: 0,
        images: ""
      },
      numInCart: 1 //quantity
    }
  ]
};
