import { Link } from "react-router"

export const Menu = () => {
    return (
        <nav className="flex items-center justify-center h-16 bg-blue-600 text-white gap-4">
            <Link to={''}>Inicio</Link>
            <Link to={'nosotros'}>Nosotros</Link>
            <Link to={'sucursales'}>Sucursales</Link>
            <Link to={'contacto'}>Contacto</Link>
            <Link to={'login'}>Login</Link>
        </nav>
    )
}