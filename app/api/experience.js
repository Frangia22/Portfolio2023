// Llamo a Op para realizar queries complejas
const { sequelize, Op } = require('sequelize');
//Importo los modelos
const db = require('../models');

//Agregar Experiencia
const addExperience = async(company, position, tasks, dateStart, dateEnd) => {
    const experience = await db.experience.create({
        company,
        position,
        tasks,
        dateStart,
        dateEnd
    });
    return experience;
};
const getExperience = async() => {
    const experiences = await db.experience.findAll()
        .then(result => {
            return result;
        });
    return experiences;
};

module.exports = {
    addExperience,
    getExperience

};