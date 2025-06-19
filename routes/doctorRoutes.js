const express = require('express');
const auth = require('../middleware/authMiddleware');
const controller = require('../controllers/doctorController');
const router = express.Router();

router.post('/', auth, controller.createDoctor);
router.get('/', controller.getDoctors);
router.get('/:id', controller.getDoctor);
router.put('/:id', auth, controller.updateDoctor);
router.delete('/:id', auth, controller.deleteDoctor);

module.exports = router;