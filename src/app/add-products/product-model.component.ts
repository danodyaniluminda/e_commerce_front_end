
export interface ProductData {
  id: number;
  name: string;
  uploadPhoto: string; // Assuming it's a URL to the uploaded photo
  buyPrice: number;
  sellPrice: number;
  category: string;
  subCategory: string;
  brand: string;
  productDesc: string;
  status: string;
  color: string;
  size: string;
  returnPeriod: { months: number, days: number };
  itemLocation: string;
  discount: number;
  specification: string;
  features: string;
  width: number;
  height: number;
  length: number;
  serialNumber: string;
  hsCode: string;
  description: string; // Use lowercase 'string' instead of 'String'
  image: string; // Use lowercase 'string' instead of 'String'
  price: number; // Use lowercase 'number' instead of 'Number'
  quantity: number; // Use lowercase 'number' instead of 'Number'
  images: string; // Assuming it's an array of image URLs
}


export const SAMPLE_ADDED_PRODUCT_DATA: ProductData[] = [
  {
    id: 1060,
    name: 'Product 1',
    uploadPhoto: 'https://example.com/photo1.jpg',
    buyPrice: 10,
    sellPrice: 20,
    category: 'Mens',
    subCategory: 'Trousers',
    brand: 'Nike',
    productDesc: 'Description of Product 1',
    status: 'Available',
    color: 'black',
    size: 'Medium',
    returnPeriod: { months: 1, days: 15 }, // Sample return period of 1 month and 15 days
    itemLocation: 'Warehouse A',
    discount: 5, // Sample discount percentage
    specification: 'Specification of Product 1',
    features: 'Features of Product 1',
    width: 10,
    height: 5,
    length: 5,
    serialNumber: 'P1SN12345',
    hsCode: '1234567890',
    description: 'order now',
    image: 'hello url',
    price: 10,
    quantity: 10,
    images: 'url',
  },
  {
    id: 2123,
    name: 'Product 2',
    uploadPhoto: 'https://example.com/photo2.jpg',
    buyPrice: 15,
    sellPrice: 25,
    category: 'Women',
    subCategory: 'Frocks',
    productDesc: 'Description of Product 2',
    status: 'Out of Stock',
    brand: 'Addidas',
    color: 'white',
    size: 'Medium',
    returnPeriod: { months: 2, days: 0 }, // Sample return period of 2 months
    itemLocation: 'Warehouse B',
    discount: 10, // Sample discount percentage
    specification: 'Specification of Product 2',
    features: 'Features of Product 2',
    width: 10,
    height: 5,
    length: 5,
    serialNumber: 'P2SN54321',
    hsCode: '0987654321',
    description: 'order now',
    image: 'hello url',
    price: 10,
    quantity: 10,
    images: 'url',
  }
];

