const dataBase_info = require('../db/infoData')
const dataBase = dataBase_info.listaData

const listaController = {
    index: function(req, res){
        let listaArticulos = []

        for (let i = 0; i < dataBase.length; i++) {
            
            listaArticulos.push({
                imagen: dataBase[i].picture,
                nombreProducto: dataBase[i].nameProduct,
                descripcion: dataBase[i].description,
                numeroComentarios: dataBase[i].numComments,
            });
        }
        return res.send(listaArticulos)
    },
    product: function(req, res){
        let idProducto = req.params.id
        let listaProductos = []

        for (let i = 0; i < dataBase.length; i++) {
            
            if (idProducto == dataBase[i].id) {

                listaProductos.push({
                    imagen: dataBase[i].picture,
                    nombreProducto: dataBase[i].nameProduct,
                    descripcion: dataBase[i].description,
                    comentarios: dataBase[i].comments, // Traer un array con la clave como nobre de usuario y el comenntario como valor
                });
            }
        }

        return res.send() 
    },
    profile: function(req, res){
        let productDelUsuario = []
        // Crear una req.params. que traiga el nombre de usuario de la url

        for (let i = 0; i < dataBase.length; i++) {
            
            if ( cambiar == dataBase[i].usuarioCreador) { // cambiar => por el nombre de la variable 

                listaProductos.push({
                    nombreUsuario: dataBase[i].usuarioCreador,
                    logoUsuario: dataBase[i].imgProfile,
                    imagen: dataBase[i].picture,
                    nombreProducto: dataBase[i].nameProduct,
                    descripcion: dataBase[i].description,
                    numeroComentarios: dataBase[i].numComments,
                });
            }
        }

        return res.send()
    },
}

// Login
// Products Add
// Profile edit
// Register
// Resultado Busqueda


module.exports = listaController