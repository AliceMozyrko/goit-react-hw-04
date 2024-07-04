import axios from "axios";

const API_KEY = "PwoA3Tc_E0q5ylzOKEoTpNyuK1hpZWyw-b-43VRqYtQ"
const BASE_URL = "https://api.unsplash.com"
axios.defaults.baseURL = BASE_URL
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;

 
export const fetchPhotos = async (query, currentPage) => {
  const response = await axios.get('/search/photos', {
    params: {
      query: query,
      page: currentPage,
      per_page: 12
    }
  });
  return response.data;
};