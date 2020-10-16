import React from 'react'
import Form from '../componentes/Form';
import { MascotaClass } from '../utils/MascotaClass';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Create = () => {

    const history = useHistory();

    const agregarMascotas = (titulo, categoria) => {
        const URL = 'https://cruddevf.firebaseio.com/mascota.json';
        const mascota = new MascotaClass(categoria, titulo, false, 'id');
        axios.post(URL, mascota.id)
            .then(history.push('/'))
            .catch(err => alert(err));

    }

    return (
        <main className="background">
            <div className="container">
                <h1>Agregar Mascota</h1>
                <Form agregarMascotas = {agregarMascotas}/>
            </div>
        </main>
    )
}

export default Create;
