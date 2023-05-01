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
//Localizar tecnologia por ID
const getTechById = async (id) => {
    const tech = await db.technologies.findByPk(id)
    .then(result => {
        return result;
    });
    return tech;
};
//Editar tecnologia
const updateTech = async(id, technology, icon) => {
    const tech = await db.technologies.update({technology, icon}, {
        where: {
            id
        }
    });
    return tech;
};
//Traer usuario y contraseña
const getUser = async(username, password) => {
    const user = await db.users.findAll({
        where: {
            username: username,
            password: password
        }
    })
    .then(result => {
        return result;
    })
    return user;
};
module.exports = {
    addTech,
    getTech,
    deleteTech,
    getTechById,
    updateTech,
    getUser
};