const Mapping = require('../models/mapping');
const Doctor = require('../models/doctor');

exports.assignDoctor = async (req, res) => {
  const { patientId, doctorId } = req.body;
  const mapping = await Mapping.create({ patientId, doctorId });
  res.status(201).json(mapping);
};

exports.getMappings = async (req, res) => {
  const mappings = await Mapping.findAll();
  res.json(mappings);
};

exports.getPatientDoctors = async (req, res) => {
  const { patientId } = req.params;
  const mappings = await Mapping.findAll({ where: { patientId }, include: Doctor });
  res.json(mappings);
};

exports.removeMapping = async (req, res) => {
  const mapping = await Mapping.findByPk(req.params.id);
  if (!mapping) return res.status(404).json({ message: 'Mapping not found' });
  await mapping.destroy();
  res.json({ message: 'Mapping removed' });
};