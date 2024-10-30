import { convertDate } from "@/utils/moment";
import axios from "axios";

const API_URL = "https://auth-user-mu.vercel.app/user";
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
      status: item.isDeleted,
      date: convertDate(item.createAt),
    }));
    return dataUsers;
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
    throw error;
  }
};
