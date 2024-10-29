import { convertRupiah } from "@/utils/rupiah";

export const datasProduct = [
  {
    img: "/img/product.png",
    name: "Kursi Goyang",
    price: convertRupiah(10000),
    status: true,
    date: "23/04/18",
  },
  {
    img: "/img/product.png",
    name: "Meja bundar",
    price: convertRupiah(15000),
    status: false,
    date: "11/01/19",
  },
  {
    img: "/img/product.png",
    name: "Panci Terbang",
    price: convertRupiah(100000),
    status: true,
    date: "19/09/17",
  },

];

export default datasProduct;
