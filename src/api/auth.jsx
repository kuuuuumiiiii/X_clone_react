/* eslint-env node */
import axiosInstance from "./axiosInstance";


const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth`;


export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/', userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data.errors || '登録に失敗しました';
    }
    throw '登録に失敗しました';
  }
};