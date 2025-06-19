const express = require('express');
const auth = require('../middleware/authMiddleware');
const controller = require('../controllers/mappingController');
const router = express.Router();

router.post('/', auth, controller.assignDoctor);
router.get('/', auth, controller.getMappings);
router.get('/:patientId', auth, controller.getPatientDoctors);
router.delete('/:id', auth, controller.removeMapping);

module.exports = router;