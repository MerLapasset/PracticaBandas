const dataBase_info = require('../db/infoData')
const dataBase = dataBase_info.listaData

const listaController = {
    index: function(req, res){

        return res.send() //Traer info: Imagen, nobre del producto, descripcion, cantidad comentarios
    },
    product: function(req, res){

        return res.send() //Traer info: Imagen, nobre del producto, descripcion, comentario o su nombre de usuario
    },
    profile: function(req, res){

        return res.send() //Traer info: Imagen usuario, nobre de usuario, y mis productos (Imagen, nobre del producto, descripcion, cantidad comentarios)
    },
}

module.exports = listaController