import { Link } from "react-router";
import type { Planet} from "../models/PlanetResponse"

interface PlanetCardProps {
    data: Planet;
}

const PlanetCard = ({ data }: PlanetCardProps) => {
    return(
        <div className="rounded-lg flex flex-col items-center border p-4 bg-white m-2">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">{data.name}</h2>
            <img className="rounded-xl" src={data.image} alt={data.name} width={200} />
            <p className="text-gray-700">{data.description}</p>
               <Link className="text-white font-semibold p-3 bg-blue-600 rounded-lg" to={`/planet/${data.id}`}>Ver Personajes</Link>
        </div>
    );
}
export default PlanetCard;