let express = require('express');
let router = express.Router();

let controlllerGeneral= require("../contr")

/* GET home page. */
router.get('/:registrado?',controlllerGeneral.index);





module.exports = router;
