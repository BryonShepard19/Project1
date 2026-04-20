const { Project } = require('../models');

exports.getAll = async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (e) { next(e); }
};

exports.create = async (req, res, next) => {
  try {
    const project = await Project.create({ ...req.body, userId: req.user.id });
    res.status(201).json(project);
  } catch (e) { next(e); }
};