// Llamo a Op para realizar queries complejas
const { sequelize, Op } = require('sequelize');
//Importo los modelos
const db = require('../models');

//Agregar Experiencia
const addResume = async(resume, motivationalPhrase) => {
    const resumen = await db.resume.create({
        resume,
        motivationalPhrase
    });
    return resumen;
};
//Traer Experiencias
const getResume = async() => {
    const resumes = await db.resume.findAll()
        .then(result => {
            return result;
        });
    return resumes;
};
//Eliminar experiencia
const deleteResume = async(idResume) => {
    const resumen = await db.resume.destroy({
        where: {
            id:idResume
        }
    });
    return resumen;
};
//Localizar experiencia por ID
const getResumeById = async(id) => {
    const resumen = await db.resume.findByPk(id)
    .then(result => {
        return result;
    });
    return resumen;
}
//Editar Experiencia
const updateResume = async(id, resume, motivationalPhrase) => {
    const resumen = await db.resume.update({ resume, motivationalPhrase }, {
        where: {
            id
        }
    });
    return resumen;
}

module.exports = {
    addResume,
    getResume,
    deleteResume,
    getResumeById,
    updateResume

};