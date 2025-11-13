import type { Character } from "../models/PlanetCharacter";

interface CharacterCardProps {
    data: Character;
}

const CharacterCard = ({ data }: CharacterCardProps) => {
    return(
        <div className="rounded-lg flex flex-col items-center border p-4 bg-white m-2">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">{data.name}</h2>
            <img className="rounded-xl" src={data.image} alt={data.name} width={200} />
            <p className="text-gray-700">{data.description}</p>
        </div>
    );
}
export default CharacterCard;