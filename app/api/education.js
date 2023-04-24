// Llamo a Op para realizar queries complejas
const { sequelize, Op } = require('sequelize');
//Importo los modelos
const db = require('../models');

//Agregar educacion
const addEducation = async (institute, title, icon, dateStart, dateEnd, statusEducation) => {
    const edu = await db.education.create({
        institute,
        title,
        icon,
        dateStart,
        dateEnd,
        statusEducation
    });
    return edu;
};
//Traer todas las educaciones
const getEducation = async() => {
    const educations = await db.education.findAll()
        .then(result => {
            return result;
        });
    return educations;
};
//Eliminar educacion
const deleteEducation = async (idEducation) => {
    const education = await db.education.destroy({
        where: {
            id:idEducation
        }
    });
    return education;
};
//Localizar tecnologia por ID
const getEducationById = async (id) => {
    const education = await db.education.findByPk(id)
    .then(result => {
        return result;
    });
    return education;
};
//Editar educacion
const updateEducation = async (id, institute, title, icon, dateStart, dateEnd, statusEducation) => {
    const education = await db.education.update({institute, title, icon, dateStart, dateEnd, statusEducation},{
        where: {
            id
        }
    });
    return education;
};
module.exports = {
    addEducation,
    getEducation,
    deleteEducation,
    getEducationById,
    updateEducation

};