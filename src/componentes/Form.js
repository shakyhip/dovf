import React, { useState } from 'react'

const Form = (props) => {
    const { agregarMascotas } = props;
    const [titulo, setTitulo] = useState([])
    const [categoria, setCategoria] = useState([])

    const titleHandler = (e) => {
        setTitulo(e.target.value);
    }

    const categoryHandler = (e) => {
        setCategoria(e.target.value);
    }

    const submitForm = () => {
        if (titulo !== '' && categoria !== '') {
            agregarMascotas(titulo, categoria);
        } else {
            alert('Ambos campos son requeridos')
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="title">Tarea</label>
                    <input onChange={titleHandler} type="text" className="form-control" id="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Categoría</label>
                    <input onChange={categoryHandler} type="text" className="form-control" id="category" />
                </div>
                <button onClick={() => submitForm()} className="btn btn-primary">Agregar</button>
            </div>
        </div>
    )
}

export default Form
