import { useState, useEffect } from 'react'
import './App.css'

interface CordenasCursor {
  x: number
  y: number
}



function App() {
  const [cordenas, setCordenas] = useState<CordenasCursor>({ x: 0, y: 0 })
  const [trail, setTrail] = useState<CordenasCursor[]>([])

  const handleMouseMove = (event: MouseEvent) => {
    const mouseX = event.clientX
    const mouseY = event.clientY

    setCordenas({ x: mouseX, y: mouseY })
    setTrail((prevTrail) => [...prevTrail, { x: mouseX, y: mouseY }].slice(-80))
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
        <h1>Coordenadas del cursor</h1>
        <div className="area-trabajo">
          <p>
            Coordenadas X: {cordenas.x} - Y: {cordenas.y}
          </p>
          {trail.map((point, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                left: point.x,
                top: point.y,
                width: '5px',
                height: '5px',
                backgroundColor: 'red',
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
