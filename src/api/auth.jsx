import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1/auth';



// export const registerUser = async (userData) => {
//   try {
//     console.log('Sending data:', userData); 
//     const response = await axios.post(`${API_BASE_URL}`, userData);
//     return response.data;
//   } catch (error) {
//     throw error.response.data.errors || '登録に失敗しました';
//   }
// };
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data.errors || error.response.data.full_messages || '登録に失敗しました';
    }
    throw '登録に失敗しました';
  }
};