const express = require('express'),
 router = express.Router(),
 controller = require('./controllers/controllerProdutos')

 router.get('/:id', controller.getById)

 module.exports = router