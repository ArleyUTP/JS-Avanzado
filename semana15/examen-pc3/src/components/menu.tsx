import { Link } from "react-router"
function Menu() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/elementos">Elementos</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Menu