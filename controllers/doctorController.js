const Doctor = require('../models/doctor');

exports.createDoctor = async (req, res) => {
  const { name, specialization } = req.body;
  const doctor = await Doctor.create({ name, specialization });
  res.status(201).json(doctor);
};

exports.getDoctors = async (req, res) => {
  const doctors = await Doctor.findAll();
  res.json(doctors);
};

exports.getDoctor = async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
  res.json(doctor);
};

exports.updateDoctor = async (req, res) => {
  const { name, specialization } = req.body;
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
  await doctor.update({ name, specialization });
  res.json(doctor);
};

exports.deleteDoctor = async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
  await doctor.destroy();
  res.json({ message: 'Doctor deleted' });
};
