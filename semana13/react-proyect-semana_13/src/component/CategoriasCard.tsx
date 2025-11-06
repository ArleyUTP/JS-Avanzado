
import type { CategoriasAnime } from "../models/Categorias";

interface CategoriasCardProps {
    categoria: CategoriasAnime;
}

export const CategoriasCard = ({ categoria }: CategoriasCardProps) => {
    return (
        <div className="border p-4 m-4 rounded-lg bg-white shadow-lg dark:bg-gray-800 dark:text-gray-100 max-w-xs w-full hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold mb-2">{categoria.name}</h2>
            <a
                href={categoria.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                Ver en MyAnimeList
            </a>
        </div>
    );
}