const Patient = require('../models/patient');

exports.createPatient = async (req, res) => {
  try {
    const { name, age, gender } = req.body;
    const patient = await Patient.create({ name, age, gender, userId: req.user.id });
    res.status(201).json(patient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPatients = async (req, res) => {
  const patients = await Patient.findAll({ where: { userId: req.user.id } });
  res.json(patients);
};

exports.getPatient = async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) return res.status(404).json({ message: 'Patient not found' });
  res.json(patient);
};

exports.updatePatient = async (req, res) => {
  const { name, age, gender } = req.body;
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) return res.status(404).json({ message: 'Patient not found' });
  await patient.update({ name, age, gender });
  res.json(patient);
};

exports.deletePatient = async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) return res.status(404).json({ message: 'Patient not found' });
  await patient.destroy();
  res.json({ message: 'Patient deleted' });
};