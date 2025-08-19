const express = require('express');
const router = express.Router();
const dotacionController = require('../controllers/dotacionController');

router.get('/', dotacionController.findAll);
router.get('/:id', dotacionController.findOne);
router.post('/', dotacionController.create);
router.put('/:id', dotacionController.update);
router.delete('/:id', dotacionController.delete);

module.exports = router;