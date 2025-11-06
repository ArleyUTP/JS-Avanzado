import axios from "axios";
import type { AnimeResponse } from "../models/Anime";
import type { CategoriasResponse } from "../models/Categorias";

const API_URL_BASE = "https://api.jikan.moe/v4";

export const getAnimes = async (): Promise<AnimeResponse> => {
  try {
    const response = await axios.get(`${API_URL_BASE}/anime`);
    return response.data;
  } catch (error) {
    console.error("Error fetching top animes:", error);
    throw error;
  }
}

export const getCategorias = async (): Promise<CategoriasResponse> => {
  try {
    const response = await axios.get(`${API_URL_BASE}/genres/manga`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
