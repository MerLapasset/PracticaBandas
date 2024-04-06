let express = require('express');
let router = express.Router();

let controllerGeneral= require("../controllers")

/* GET home page. */
router.get('/:registrado?',controllerGeneral.index);
router.get("/producto/:registrado?/:id",controllerGeneral.producto)
router.get("/profile/:registrado?/:usuario",controllerGeneral.usuario)
router.get ("/producto/:registrado?/add/:id",controllerGeneral.addProducto)
router.get ("/registro/:registrado?",controllerGeneral.registro)
router.get("/login/:registrado?",controllerGeneral.login)




module.exports = router;
