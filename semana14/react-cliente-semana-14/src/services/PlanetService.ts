import axios from "axios";
import type { PlanetResponse } from "../models/PlanetResponse";
export const PlanetService = {
    getPlanets: async (page: number, limit: number=10) : Promise<PlanetResponse> =>{
        const response = await axios.get<PlanetResponse>(`https://dragonball-api.com/api/planets?page=${page}&limit=${limit}`);
        return response.data;
    }
}