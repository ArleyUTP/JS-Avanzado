import { useRef } from "react"

export const Login = () => {
    const inputUsuario = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Usuario:", inputUsuario.current?.value);
        console.log("Contraseña:", inputPassword.current?.value);
        resetForm();
    }
    const resetForm = () => {
        if (inputUsuario.current) inputUsuario.current.value = '';
        if (inputPassword.current) inputPassword.current.value = '';
    }
    return (
        <>
        <form action="" className="flex flex-col gap-6 max-w-sm mx-auto mt-10 p-8 bg-white rounded-lg shadow-md border border-gray-200 my-12" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Iniciar Sesión</h2>
            <div className="flex flex-col">
            <label htmlFor="username" className="text-sm font-medium text-gray-700 mb-1">Usuario:</label>
            <input type="text" id="username" name="username" ref={inputUsuario} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">Contraseña:</label>
            <input type="password" id="password" name="password" ref={inputPassword} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200">Ingresar</button>
        </form>
        </>
    )
}