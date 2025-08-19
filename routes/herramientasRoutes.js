const express = require('express');
const router = express.Router();
const herramientaController = require('../controllers/herramientasController');

router.get('/', herramientaController.findAll);
router.get('/:id', herramientaController.findOne);
router.post('/', herramientaController.create);
router.put('/:id', herramientaController.update);
router.delete('/:id', herramientaController.delete);

module.exports = router;