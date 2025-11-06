import { useState } from "react";

export const Contacto = () => {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        dni: '',
        correo: '',
        mensaje: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((datosAnteriores) => ({
            ...datosAnteriores,
            [name]: value
        }));
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Datos del formulario de contacto:", formData);
        resetForm();
    }
    const resetForm = () => {
        setFormData({
            nombres: '',
            apellidos: '',
            dni: '',
            correo: '',
            mensaje: ''
        });
    }
    return (
        <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-sm mx-auto mt-10 p-8 bg-white rounded-lg shadow-md border border-gray-200 my-12">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Contacto</h2>
            <div className="flex flex-col">
                <label htmlFor="nombres" className="text-sm font-medium text-gray-700 mb-1">Nombres:</label>
                <input type="text" id="nombres" name="nombres" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleChange} value={formData.nombres} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="apellido" className="text-sm font-medium text-gray-700 mb-1">Apellidos:</label>
                <input type="text" id="apellidos" name="apellidos" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleChange} value={formData.apellidos} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="dni" className="text-sm font-medium text-gray-700 mb-1">DNI:</label>
                <input type="text" id="dni" name="dni" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleChange} value={formData.dni} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="correo" className="text-sm font-medium text-gray-700 mb-1">Correo Electrónico:</label>
                <input type="email" id="correo" name="correo" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleChange} value={formData.correo} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="mensaje" className="text-sm font-medium text-gray-700 mb-1">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows={4} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleChange} value={formData.mensaje}></textarea>
            </div>
            <button  type="submit"  className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200">Enviar</button>
        </form>
        </>
    )
}