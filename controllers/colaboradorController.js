const db = require('../models');
const { Colaborador } = db;

exports.findAll = async(req, res) => {
    try {
        const data = await Colaborador.findAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findOne = async(req, res) => {
    try {
        const data = await Colaborador.findByPk(req.params.id);
        if (data) res.json(data);
        else res.status(404).json({ message: 'No encontrado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async(req, res) => {
    try {
        const data = await Colaborador.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.update = async(req, res) => {
    try {
        const [updated] = await Colaborador.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedData = await Colaborador.findByPk(req.params.id);
            res.json(updatedData);
        } else {
            res.status(404).json({ message: 'No encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.delete = async(req, res) => {
    try {
        const deleted = await Colaborador.destroy({
            where: { id: req.params.id }
        });
        if (deleted) res.json({ message: 'Eliminado correctamente' });
        else res.status(404).json({ message: 'No encontrado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};