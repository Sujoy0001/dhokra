// store.js

import slideimg01 from '../assets/image/slide01.webp';
import slideimg02 from '../assets/image/slide02.webp';
import slideimg03 from '../assets/image/slide03.webp';

import cat1 from "../assets/catagoryImage/cat01.png";
import cat2 from "../assets/catagoryImage/cat02.png";
import cat3 from "../assets/catagoryImage/cat03.png";
import cat4 from "../assets/catagoryImage/cat04.png";
import cat5 from "../assets/catagoryImage/cat05.png";
import cat6 from "../assets/catagoryImage/cat06.png";

const categories = [
  {
    name: "Wall Hanging",
    image: cat1,
    link: "/product/wall-hanging",
  },
  {
    name: "Special Items",
    image: cat2,
    link: "/product/special-items",
  },
  {
    name: "Home Decor & Tabletop",
    image: cat3,
    link: "/product/home-decor-tabletop",
  },
  {
    name: "Pen & Napkin Holder",
    image: cat4,
    link: "/product/pen-napkin-holder",
  },
  {
    name: "Candle stand & Pooja Related",
    image: cat5,
    link: "/product/candle-stand-and-pooja-related",
  },
  {
    name: "Gift Collection",
    image: cat6,
    link: "/product/trending",
  },
];


export const slides = [
  {
    id: 1,
    image: slideimg01,
    alt: 'None',
    title: 'Authentic Bengal Dokra Crafts',
    description: 'Handcrafted using ancient metalworking techniques',
  },
  {
    id: 2,
    image: slideimg02,
    alt: 'None',
    title: 'Heritage Metal Artistry',
    description: 'Each piece tells a story of Bengal\'s rich culture',
  },
  {
    id: 3,
    image: slideimg03,
    alt: 'None',
    title: 'Timeless Dokra Creations',
    description: 'Preserving centuries-old craftsmanship',
  },
];


export const navItems = [
    { name: "Wall Hanging", path: "/product/wall-hanging" },
    { name: "Special Items", path: "/product/special-items" },
    { name: "Home Decor & Tabletop", path: "/product/home-decor-and-tabletop" },
    { name: "Pen & Napkin Holder", path: "/product/pen-and-napkin-holder" },
    { name: "Candle stand & Pooja Related", path: "/product/candle-stand-and-pooja-related" },
    { name: "My Creativity", path: "/product/my-creativity" },
    { name: "Gift Collection", path: "/product/trending" },
    { name: "Available Collection", path: "/product/available-collection" },
];


export const navItems2 = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Upload", path: "/dashboard/upload" },
    { name: "All Products", path: "/dashboard/all-products" },
    { name: "Gift Items", path: "/dashboard/trending" },
    { name: "Stock Products", path: "/dashboard/stock-products" },
    { name: "Upload Gallery", path: "/dashboard/upload-gallery" },
    { name: "Image Upload", path: "/dashboard/image-upload" },
    { name: "Video Upload", path: "/dashboard/video-upload" },
];

const store = {
  categories,
};

export default store;