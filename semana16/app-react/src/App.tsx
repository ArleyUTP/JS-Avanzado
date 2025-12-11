import { useState, useEffect } from 'react'
import './App.css'

interface CordenadasCursor {
  x: number
  y: number
}



function App() {
  const [cordenas, setCordenas] = useState<CordenadasCursor>({ x: 0, y: 0 })

  const handleMouseMove = (event: MouseEvent) => {
    const mouseX = event.clientX
    const mouseY = event.clientY

    setCordenas({ x: mouseX, y: mouseY })
  }
  useEffect(() => {

    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div>
        <h1>Coordenadas del ratón</h1>
        <div className="">
          <p>
            Coordenadas X:<strong>{cordenas.x}</strong>
          </p>
          <p>
            Coordenadas Y: <strong>{cordenas.y}</strong>
          </p>
        </div>
      </div>
    </>
  )
}

export default App
