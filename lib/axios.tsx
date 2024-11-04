import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const axiosClient = axios.create({
  baseURL: API_URL,
});
