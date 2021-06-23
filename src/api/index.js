import axios from 'axios';

export const getCountries => (url) => axios.get(url);