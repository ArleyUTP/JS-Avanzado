import axios from "axios";
import type { PlanetCharactersResponse } from "../models/PlanetCharacter";

const BASE_URL = "https://dragonball-api.com/api/planets";

const PlanetCharacterService = {
    getCharactersByPlanet: async (idPlanet: number) => {
        const response = await axios.get<PlanetCharactersResponse>(`${BASE_URL}/${idPlanet}`);
        return response.data;
    }
};

export default PlanetCharacterService;
