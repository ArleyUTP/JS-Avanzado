import React, { useState } from 'react'
import './App.css'
import { getAnimes, getCategorias } from './services/AnimeService'
import type { AnimeResponse } from './models/Anime'
import AnimeCard from './component/AnimeCard';
import type { CategoriasAnime } from './models/Categorias';
function App() {

  const [animes, setAnimes] = useState<AnimeResponse["data"]>([]);
  const [categorias, setCategorias] = useState<CategoriasAnime[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const animes = await getAnimes();
      setAnimes(animes.data);
    };
    const fetchCategorias = async () => {
      const categorias = await getCategorias();
      setCategorias(categorias.data);
    };
    fetchData();
    fetchCategorias();
  }, [])

  return (
    <>
      <div className="container mx-auto p-4 flex flex-wrap items-center justify-center">
        {animes.map((anime) => {
          return (
            <AnimeCard anime={anime} key={anime.mal_id} />
          )
        })}
        {categorias.map((categoria) => {
          return (
            <div key={categoria.mal_id} className="border p-4 m-4 rounded-lg bg-white shadow-lg dark:bg-gray-800 dark:text-gray-100 max-w-xs w-full hover:shadow-xl transition-shadow">
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
          )
        })}
        {animes.length === 0 && <p>Cargando animes...</p>}
        {categorias.length === 0 && <p>Cargando categorias...</p>}
      </div>
    </>
  )
}

export default App
