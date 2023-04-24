// Llamo a Op para realizar queries complejas
const { sequelize, Op } = require('sequelize');
//Importo los modelos
const db = require('../models');

//Agregar educacion
const addEducation = async (institute, title, icon, dateStart, dateEnd) => {
    const edu = await db.education.create({
        institute,
        title,
        icon,
        dateStart,
        dateEnd
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
module.exports = {
    addEducation,
    getEducation

};