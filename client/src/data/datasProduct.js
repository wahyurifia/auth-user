import { convertRupiah } from "@/utils/rupiah";
import { convertDate } from "@/utils/moment";
import axios from "axios";

const API_URL = "https://auth-user-mu.vercel.app/product";
export const getProducts = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const dataProduct = response.data.product.map((item) => ({
      name: item.name,
      price: convertRupiah(item.price),
      user: item.user.name,
      status: item.isDeleted,
      date: convertDate(item.createAt),
    }));
    return dataProduct;
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
    throw error;
  }
};

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
