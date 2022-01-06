const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const { q, nombre, apellido, page = 1, limit = 10 } = req.query;      // De esta manera obtengo los Query params.

    res.json({
        msg: 'get API - Controlador',
        nombre,
        apellido,
        page,
        limit
   });
};

usuariosPost = (req, res) => {
    
    const {nombre , edad } = req.body;
    
    res.status(201).json({
        msg: 'post API - Controlador',
        nombre,
        edad
   });
};

usuariosPut = (req, res) => {
    
    const id = req.params.id;       // Así obtengo el valor que vino como Parámetro de Segmento.
    
    res.json({
        msg: 'put API - Controlador',
        id
   });
};

usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - Controlador'
   });
};

usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controlador'
   });
};



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}