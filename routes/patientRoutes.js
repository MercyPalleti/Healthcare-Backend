const express = require('express');
const auth = require('../middleware/authMiddleware');
const controller = require('../controllers/patientController');
const router = express.Router();

router.post('/', auth, controller.createPatient);
router.get('/', auth, controller.getPatients);
router.get('/:id', auth, controller.getPatient);
router.put('/:id', auth, controller.updatePatient);
router.delete('/:id', auth, controller.deletePatient);

module.exports = router;