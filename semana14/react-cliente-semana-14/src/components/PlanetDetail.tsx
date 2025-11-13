import { useParams } from "react-router";
import ListCharacters from "./ListCharacters";

const PlanetDetail = () => {
    const { id } = useParams<{ id: string }>();
    const planetId = id ? parseInt(id, 10) : 0;

    
    return (
        <div>
            
            <h1>Personajes del Planeta {planetId}</h1>
            <ListCharacters idPlanet={planetId} />
        </div>
    );
};

export default PlanetDetail;