const { Router } = require('express');
const { usuariosGet, 
        usuariosPost, 
        usuariosPut, 
        usuariosDelete, 
        usuariosPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );

router.post('/', usuariosPost );

router.put('/:id', usuariosPut ); // Esto sirve para obtener los Parámetros de segmento.

router.patch('/', usuariosPatch );

router.delete('/', usuariosDelete );





module.exports = router;