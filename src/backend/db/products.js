import { v4 as uuid } from "uuid";
import { productImage } from "../../assets";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // {
  //   _id: uuid(),
  //   title: "You Can WIN",
  //   author: "Shiv Khera",
  //   price: "5000",
  //   categoryName: "non-fiction",
  // },
  // {
  //   _id: uuid(),
  //   title: "You are Winner",
  //   author: "Junaid Qureshi",
  //   price: "3000",
  //   categoryName: "horror",
  // },
  // {
  //   _id: uuid(),
  //   title: "Think and Grow Rich",
  //   author: "Shiv Khera",
  //   price: "1000",
  //   categoryName: "fiction",
  // },

  {
    _id: uuid(),
    brand: "AmorMente",
    title: "Woven Beanie Cap",
    priceAfterDiscount: 985,
    originalPrice: 2325,
    discount: 57,
    category: "Summer Collection",
    sizeAvailable: ["S", "M"],
    idealFor: ["Women"],
    Image: productImage,
  },
  {
    _id: uuid(),
    brand: "Nike",
    title: "Full Sleeve Quilte",
    priceAfterDiscount: 1985,
    originalPrice: 23325,
    discount: 57,
    sizeAvailable: ["S", "M"],
    idealFor: ["Men"],
    category: "Summer Collection",
    Image: productImage,
  },
  {
    _id: uuid(),
    brand: "Reebok",
    title: "Woven Beanie Cap",
    priceAfterDiscount: 9985,
    originalPrice: 23625,
    discount: 57,
    sizeAvailable: ["S", "M"],
    idealFor: ["Women"],
    category: "Summer Collection",
    Image: productImage,
  },
  {
    _id: uuid(),
    brand: "TRIPR",
    title: "Cotton Polyester",
    priceAfterDiscount: 861,
    originalPrice: 2499,
    discount: 65,
    sizeAvailable: ["L"],
    idealFor: ["Men"],
    category: "Winter Collection",
    Image: productImage,
  },
  {
    _id: uuid(),
    brand: "Eyebogler",
    title: "Full Sleeve Solid Men Quilte",
    priceAfterDiscount: 785,
    originalPrice: 2325,
    discount: 57,
    sizeAvailable: ["M", "L"],
    idealFor: ["Women"],
    category: "Mansoom Collection",
    Image: productImage,
  },
];
