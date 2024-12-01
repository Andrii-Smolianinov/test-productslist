import axios from "axios";
import { ProductTypes } from "../src/types/Product";

const API_BASE_URL = "https://6749e5aa868020296633047a.mockapi.io/api/v1";

export const fetchProducts = async (): Promise<ProductTypes[]> => {
  try {
    const response = await axios.get<ProductTypes[]>(`${API_BASE_URL}/product`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
