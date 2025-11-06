import type { Data } from "../models/Anime";

interface AnimeCardProps{
    anime: Data;
}

const AnimeCard = ({ anime }: AnimeCardProps) =>{
    return(
        <div className="border p-4 m-4 rounded-lg bg-white shadow-lg dark:bg-gray-800 dark:text-gray-100 max-w-md w-full hover:shadow-xl transition-shadow h-full">
            <div className="flex gap-4">
            <img
                src={anime.images?.jpg?.image_url}
                alt={anime.title || anime.title_english || "Anime cover"}
                className="w-32 h-44 rounded object-cover flex-shrink-0 hover:scale-105 transition-transform"
                loading="lazy"
            />
            <div className="flex-1">
                <h2 className="text-lg font-bold">{anime.title_english || anime.title}</h2>
                {anime.title !== anime.title_english && anime.title_english && (
                <p className="text-sm text-gray-500 dark:text-gray-300">{anime.title}</p>
                )}

                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">{anime.type}</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{anime.year || "Desconocido"}</span>
                {anime.airing && <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Airing</span>}
                <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full">{anime.episodes ?? "?"} eps</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full">{anime.duration}</span>
                </div>

                <div className="mt-3 flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1">
                    <strong className="text-xl">{anime.score ?? "—"}</strong>
                    <span className="text-gray-500 dark:text-gray-300">⭐</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-300">
                    Rank #{anime.rank ?? "—"}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-300">
                    {anime.popularity ? `Pop #${anime.popularity}` : ""}
                </div>
                </div>

                <div className="mt-3 text-sm text-gray-700 dark:text-gray-200">
                <p className="line-clamp-3">
                    {anime.synopsis
                    ? anime.synopsis.length > 220
                        ? anime.synopsis.slice(0, 220).trimEnd() + "…"
                        : anime.synopsis
                    : "No synopsis available."}
                </p>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                {anime.genres?.slice(0, 4).map((g) => (
                    <span key={g.name} className="text-xs px-2 py-1 bg-gray-100 rounded-full dark:bg-gray-700">
                    {g.name}
                    </span>
                ))}
                {anime.studios?.slice(0, 2).map((s) => (
                    <span key={s.name} className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                    {s.name}
                    </span>
                ))}
                </div>

                <div className="mt-4 flex gap-3">
                <a
                    href={anime.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                    aria-label={`More info about ${anime.title}`}
                >
                    More Info
                </a>

                {(
                    anime.trailer?.embed_url ||
                    anime.trailer?.url ||
                    anime.trailer?.youtube_id
                ) && (
                    <a
                    href={anime.trailer?.embed_url || anime.trailer?.url || `https://www.youtube.com/watch?v=${anime.trailer?.youtube_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 border rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    aria-label={`Watch trailer for ${anime.title}`}
                    >
                    Watch Trailer
                    </a>
                )}
                </div>
            </div>
            </div>

            <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 flex flex-wrap gap-4">
            <div>Members: {anime.members?.toLocaleString() ?? "—"}</div>
            <div>Favorites: {anime.favorites?.toLocaleString() ?? "—"}</div>
            <div>Scored by: {anime.scored_by?.toLocaleString() ?? "—"}</div>
            </div>
        </div>
    )
}
export default AnimeCard;