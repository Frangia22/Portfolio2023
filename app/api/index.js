// Llamo a Op para realizar queries complejas
const { sequelize, Op } = require('sequelize');
//Importo los modelos
const db = require('../models');

//Agregar Tecnologia
const addTech = async (technology, icon) => {
    const tech = await db.technologies.create({
        technology,
        icon
    });
    return tech;
};
//Traer todas las tecnologias
const getTech = async () => {
    const techs = await db.technologies.findAll()
        .then(result => {
            return result;
        });
    return techs;
};
//Eliminar tecnologia
const deleteTech = async (idTech) => {
    const tech = await db.technologies.destroy({
        where: {
            id:idTech
        }
    });
    return tech;
};
module.exports = {
    addTech,
    getTech,
    deleteTech
};