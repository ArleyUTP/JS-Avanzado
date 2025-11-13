import React from "react";
import PlanetCharacterService from "../services/PlanetCharacterService";
import CharacterCard from "./CharacterCard";
import type { PlanetCharactersResponse } from "../models/PlanetCharacter";
import { Link } from "react-router";

interface ListCharactersProps {
    idPlanet: number;
}



const ListCharacters = ({ idPlanet }: ListCharactersProps) => {
    const [data, setData] = React.useState<PlanetCharactersResponse | null>(null);
    React.useEffect(() => {
    const fetchData = async () => {
        const data = await PlanetCharacterService.getCharactersByPlanet(idPlanet);
        setData(data);
    };
    fetchData();
}, [idPlanet]);
    return(
        <div className="flex flex-col justify-center items-center p-4 bg-gray-100">
                    <div className="grid grid-cols-3 gap-4">
            {data?.characters.map(character => (
                <CharacterCard key={character.id} data={character} />
            ))}
        </div>
            {data?.characters.length === 0 && (<p className="text-center text-2xl">No hay personajes para este planeta.</p>
            )}
            <Link className="text-white font-semibold p-3 bg-blue-600 rounded-lg" to={`/`}>Volver al Planeta</Link>
        </div>
    );
}
export default ListCharacters;