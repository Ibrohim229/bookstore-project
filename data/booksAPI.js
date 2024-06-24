// lib/googleBooksService.js
import axios from "axios";

const API_URL = "https://www.googleapis.com/books/v1";

export const searchBooks = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/volumes`, {
      params: {
        q: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
