const express = require('express');
const router = express.Router();
const elementosProteccionController = require('../controllers/elementosProteccionController');

router.get('/', elementosProteccionController.findAll);
router.get('/:id', elementosProteccionController.findOne);
router.post('/', elementosProteccionController.create);
router.put('/:id', elementosProteccionController.update);
router.delete('/:id', elementosProteccionController.delete);

module.exports = router;