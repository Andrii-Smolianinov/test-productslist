import axios from "axios";

const API_BASE_URL = "https://6749e5aa868020296633047a.mockapi.io/api/v1";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/product`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
