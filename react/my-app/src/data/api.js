import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; 

export const fetchProducts = () => {
  return axios.get(`${API_BASE_URL}/products`);
};

export const fetchMeals = ()=>{
    return axios.get(`${API_BASE_URL}/meals`);
}