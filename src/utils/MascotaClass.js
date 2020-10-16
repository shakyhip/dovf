class MascotaClass {
    constructor(categoria, titulo, hecho, id) {
        this[id] = {
            categoria: categoria,
            titulo: titulo,
            hecho: hecho
        }
    }
}

module.exports = { MascotaClass };