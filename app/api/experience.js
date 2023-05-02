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
//Traer Experiencias
const getExperience = async() => {
    const experiences = await db.experience.findAll({
        order: [
            [ 'dateEnd', 'DESC'],
        ]
    })
        .then(result => {
            return result;
        });
    return experiences;
};
//Eliminar experiencia
const deleteExperience = async(idExperience) => {
    const experience = await db.experience.destroy({
        where: {
            id:idExperience
        }
    });
    return experience;
};
//Localizar experiencia por ID
const getExperienceById = async(id) => {
    const experience = await db.experience.findByPk(id)
    .then(result => {
        return result;
    });
    return experience;
}
//Editar Experiencia
const updateExperience = async(id, company, position, tasks, dateStart, dateEnd) => {
    const experience = await db.experience.update({ company, position, tasks, dateStart, dateEnd}, {
        where: {
            id
        }
    });
    return experience;
}

module.exports = {
    addExperience,
    getExperience,
    deleteExperience,
    getExperienceById,
    updateExperience

};