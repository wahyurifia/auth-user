import { convertRupiah } from "@/utils/rupiah";
import { convertDate } from "@/utils/moment";
import axios from "axios";

<<<<<<< HEAD
const API_PRODUCTS = "https://auth-user-one.vercel.app/products";
const API_PRODUCT = "https://auth-user-one.vercel.app/product";
=======
const API_PRODUCTS = "https://auth-user-mu.vercel.app/products";
const API_PRODUCT = "https://auth-user-mu.vercel.app/product";
>>>>>>> 82baec51ec163269e96d98a3bb8cf4991c900451

export const getProducts = async (token) => {
  try {
    const response = await axios.get(API_PRODUCTS, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const dataProduct = response.data.products.map((item) => ({
      productId: item.id,
      name: item.name,
      price: convertRupiah(item.price),
      user: item.user.name,
      status: item.status,
      date: convertDate(item.createAt),
    }));
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
      status: item.status,
      date: convertDate(item.createAt),
    }));
    return dataProduct;
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
    throw error;
  }
};

export const getProductById = async (token, productId) => {
  try {
    const response = await axios.get(`${API_PRODUCT}/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const item = response.data.product;
    const dataProduct = {
      name: item.name,
      price: item.price,
      status: item.status,
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
  } catch (error) {
    console.error("Error add data :", error);
  }
};

export const editProduct = async (
  token,
  name,
  price,
  status,
  productId,
  userId,
) => {
  try {
    const response = await axios.put(
      `${API_PRODUCT}/${productId}`,
      {
        name,
        price,
        status,
        userId,
      },
      {
        headers: {
          Authorization: `Bearer ` + token,
        },
      },
    );
  } catch (error) {
    console.error("Error add data :", error);
  }
};

export const deleteProduct = async (token, productId) => {
  try {
    const response = await axios.delete(`${API_PRODUCT}/${productId}`, {
      headers: {
        Authorization: `Bearer ` + token,
      },
    });
    console.log(response);
  } catch (error) {
    console.error("Error add data :", error);
  }
};
