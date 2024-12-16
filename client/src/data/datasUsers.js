import { convertDate } from "@/utils/moment";
import axios from "axios";

<<<<<<< HEAD
const API_URL = "https://auth-user-one.vercel.app/user";
=======
const API_URL = "https://auth-user-mu.vercel.app/user";
>>>>>>> 82baec51ec163269e96d98a3bb8cf4991c900451
export const getUsers = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        // apiKey: SUPABASE_API_KEY,
        Authorization: `Bearer ${token}`,
      },
    });

    const dataUsers = response.data.users.map((item) => ({
      name: item.name,
      email: item.email,
      role: item.role,
      status: item.status,
      date: convertDate(item.createAt),
    }));
    return dataUsers;
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
    throw error;
  }
};

export const getUserById = async (token, userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { name, email, role, createAt } = response.data.user;
    const dataUser = {
      name,
      email,
      role,
      date: convertDate(createAt),
    };
    return dataUser;
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
    throw error;
  }
};

export const editUser = async (token, userId) => {};
