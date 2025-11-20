import { ElementoService } from "../service/ElementoService";
import type { IElemento } from "../model/elemento.interface";
import { useEffect, useState } from "react";

function elementos() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [elementos, setElementos] = useState<IElemento[]>([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [elemento,setElemento] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [simbolo,setSimbolo] = useState("");

    const getElements = ()=>{
                ElementoService.obtenerElementos().then((data) => {
            setElementos(data);
        });
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        getElements();  
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "elemento"){
            setElemento(e.target.value);
        }else if(e.target.name === "simbolo"){
            setSimbolo(e.target.value);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // <-- no enviar id aquí
         ElementoService.crearElemento({elemento, simbolo }).then(() => {
            getElements();
            setElemento("");
            setSimbolo("");
        });
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="elemento"
                    value={elemento}
                    onChange={handleChange}
                    placeholder="Elemento"
                />
                <input
                    type="text"
                    name="simbolo"
                    value={simbolo}
                    onChange={handleChange}
                    placeholder="Símbolo"
                />
                <button type="submit">Agregar Elemento</button>
            </form>
            <div>
                <h2>Los Elementos de la tabla periódica</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Elemento</th>
                            <th>Símbolo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elementos.map((elem) => (
                            <tr key={elem.id}>
                                <td>{elem.id}</td>
                                <td>{elem.elemento}</td>
                                <td>{elem.simbolo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default elementos
