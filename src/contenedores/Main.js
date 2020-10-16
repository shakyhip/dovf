import React, { useState, useEffect } from 'react'
import Mascota from '../componentes/Mascota'
import Box from '../componentes/Box';
import { MascotaClass } from '../utils/MascotaClass';

import axios from 'axios';

const Main = () => {

    const [mascotas, setMascotas] = useState([]);
    const URL = 'https://cruddevf.firebaseio.com/mascota.json';

    //Leer tareas de la base de datos
    const getMascotas = () => {
        axios.get(URL)
            .then(resp => {
                console.log(resp.data)
                setMascotas(resp.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const deleteMascotas = (id) => {
        const URL = `https://cruddevf.firebaseio.com/mascota/${id}.json`;
        axios.delete(URL)
            .then(() => getMascotas())
            .catch(err => alert(err));
    }

    const updateMascotas = (categoria, titulo, done, id) => {
        const mascota = new MascotaClass(categoria, titulo, done, id);
        console.log(mascota);
        axios.patch(URL, mascota)
            .then(() => getMascotas())
            .catch(err => alert(err));
    }

    useEffect(() => {
        //Llamada a firebase
        getMascotas();
    }, [])

    return (
        <div>
            <main className="background">
                <div className="container">
                    <h1>Mascotas</h1>
                    {
                        mascotas ?
                            Object.keys(mascotas).map(id => {
                                return (
                                    <Mascota titulo={mascotas[id].titulo}
                                        hecho={mascotas[id].hecho}
                                        categoria={mascotas[id].categoria}
                                        id={id}
                                        deleteMascotas={deleteMascotas}
                                        updateMascotas={updateMascotas}
                                        key={id} />
                                )
                            })
                            :
                            <Box msg="No hay mascotas" />
                    }
                </div>
            </main>
        </div>
    )
}

export default Main;
