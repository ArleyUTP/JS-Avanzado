import './App.css'
import { Outlet } from 'react-router'
import { Menu } from './components/Menu'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
function App() {

  return (
    <>
    <Header />
    <Menu />
    <main className='h-full flex flex-col items-center justify-center'>
      <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App
