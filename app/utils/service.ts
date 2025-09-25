import axios from 'axios';

const API = axios.create({
  baseURL: process.env.API_URL || 'https://restcountries.com/v3.1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
