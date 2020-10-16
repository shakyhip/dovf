import React from 'react'

const Mascota = (props) => {
    const { titulo, hecho, categoria, deleteMascotas, updateMascotas, id } = props;
    return (
        <div className="card m-3">
            <h5 className="card-header">{titulo}</h5>
            <div className="card-body">
                <h5 className="card-title">{hecho}</h5>
                <p className="card-text">{categoria}</p>
                {
                    hecho
                        ? <button className="btn btn-secondary" onClick={() => updateMascotas(categoria, titulo, false, id)}>Deshacer</button>
                        : <button className="btn btn-primary" onClick={() => updateMascotas(categoria, titulo, true, id)}>Completar</button>
                }
                <button className="btn btn-danger" onClick={() => deleteMascotas(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default Mascota
