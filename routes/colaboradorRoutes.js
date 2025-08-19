const express = require('express');
const router = express.Router();
const colaboradorController = require('../controllers/colaboradorController');

router.get('/', colaboradorController.findAll);
router.get('/:id', colaboradorController.findOne);
router.post('/', colaboradorController.create);
router.put('/:id', colaboradorController.update);
router.delete('/:id', colaboradorController.delete);

module.exports = router;