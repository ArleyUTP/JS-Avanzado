import './App.css'
import Menu from './components/menu'
import { Outlet } from 'react-router'
function App() {

  return (
    <>
    <Menu></Menu>
    <Outlet></Outlet>
    </>
  )
}

export default App
