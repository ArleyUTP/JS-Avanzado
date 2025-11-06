
const Footer = () => {
    return (
        <footer className="w-full h-16 bg-gray-800 text-white flex items-center justify-center">
            <p className="text-sm">© {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.</p>
        </footer>
    );
}
export default Footer;