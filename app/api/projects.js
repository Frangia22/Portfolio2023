// Llamo a Op para realizar queries complejas
const { sequelize, Op } = require('sequelize');
//Importo los modelos
const db = require('../models');

//Traer proyectos
const getProject = async() => {
    const projects = await db.projects.findAll()
    .then(result => {
        return result;
    });
    return projects;
}
//Traer proyectos por ID
const getProjectById = async(id) => {
    const project = await db.projects.findByPk(id)
    .then(result => {
        return result;
    });
    return project;
}
//Agregar proyecto
const addProject = async(name, technologies, description, image, domain, repoGit) => {
    const project = await db.projects.create({
        name,
        technologies,
        description,
        image,
        domain,
        repoGit
    });
    return project;
}
//Editar proyecto
const updateProject = async(id, name, technologies, description, image, domain, repoGit) => {
    const project = await db.projects.update({name, technologies, description, image, domain, repoGit}, {
        where: {
            id
        }
    });
    return project;
}
//Eliminar proyecto
const deleteProject = async(idProject) => {
    const project = await db.projects.destroy({
        where: {
            id:idProject
        }
    });
    return project;
}

module.exports = {
    getProject,
    getProjectById,
    addProject,
    updateProject,
    deleteProject

}