import React, { useState } from 'react'
import './App.css'
import type { PlanetResponse } from './models/PlanetResponse';
import { PlanetService } from './services/PlanetService';
import PlanetCard from './components/PlanetCard';

function App() {
  const [planets, setPlanets] = useState<PlanetResponse | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  React.useEffect(() => {
    PlanetService.getPlanets(currentPage)
      .then((data) => {
        setPlanets(data);
      })
      .catch((error) => {
        console.error("Error fetching planets:", error);
      });
  }, [currentPage]);

  const handleNextPage = () => {
    if (planets && currentPage < planets.meta.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className='grid grid-cols-3 gap-4 bg-[#f3f3f3]'>
        {planets && planets.items.map((planet) => (
            <PlanetCard key={planet.id} data={planet} />
        ))}
      </div>
      <div className="pagination-controls mt-4">
        <button className='text-white font-semibold p-3 bg-blue-600 rounded-lg' onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>   Página {currentPage} de {planets?.meta.totalPages || 1}    </span>
        <button  className='text-white font-semibold p-3 bg-blue-600 rounded-lg' onClick={handleNextPage}>
          Siguiente
        </button>
      </div>
    </>
  )
}

export default App