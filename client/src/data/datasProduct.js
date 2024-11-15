import { convertRupiah } from "@/utils/rupiah";
import { convertDate } from "@/utils/moment";
import axios from "axios";

const API_PRODUCTS = "https://auth-user-mu.vercel.app/products";
const API_PRODUCT = "https://auth-user-mu.vercel.app/product";

export const getProducts = async (token) => {
  try {
    const response = await axios.get(API_PRODUCTS, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const dataProduct = response.data.products.map((item) => ({
      name: item.name,
      price: convertRupiah(item.price),
      user: item.user.name,
      status: item.isDeleted,
      date: convertDate(item.createAt),
    }));
    console.log(dataProduct);
    return dataProduct;
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
    throw error;
  }
};

export const getProduct = async (token) => {
  try {
    const response = await axios.get(API_PRODUCT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const dataProduct = response.data.products.map((item) => ({
      productId: item.id,
      name: item.name,
      price: convertRupiah(item.price),
      status: item.isDeleted,
      date: convertDate(item.createAt),
    }));
    return dataProduct;
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
    throw error;
  }
};

export const getProductById = async (token, userId) => {
  try {
    const response = await axios.get(`${API_PRODUCT}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const item = response.data.product;
    const dataProduct = {
      name: item.name,
      price: item.price,
      status: item.isDeleted,
      user: item.user.name,
      date: convertDate(item.createAt),
    };
    return dataProduct;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (token, name, price, userId) => {
  try {
    const response = await axios.post(
      API_PRODUCT,
      {
        name,
        price,
        userId,
      },
      {
        headers: {
          Authorization: `Bearer ` + token,
        },
      },
    );
    console.log(response);
  } catch (error) {
    console.error("Error add data :", error);
  }
};
