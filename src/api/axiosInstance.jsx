import axios from 'axios';


const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;


const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/api/v1/auth`, // APIのベースURL
  headers: {
    'Content-Type': 'application/json', // リクエストヘッダーを設定
  },
});

export default axiosInstance;