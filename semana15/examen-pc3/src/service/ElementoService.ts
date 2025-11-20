import axios from "axios";
import type { IElemento } from "../model/elemento.interface";

const URL_BASE:string = 'http://localhost:3000/elementos';

export const ElementoService ={
    obtenerElementos: async () =>{
        const response = await axios.get<IElemento[]>(URL_BASE);
        const data = await response.data;
        return data;
    },
    crearElemento: async (elemento:Omit<IElemento, "id">) =>{
        const response = await axios.post<IElemento>(URL_BASE, elemento);
        const data = await response.data;
        return data;
    }
}