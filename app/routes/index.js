var express = require('express');
var router = express.Router();
const api = require('../api');
const apiEducation = require('../api/education');
const apiExperience = require('../api/experience');
const apiResume = require('../api/resume');
const apiProject = require('../api/projects');
const bcrypt = require('bcrypt');
const db = require('../models');

/* GET home page. */
router.get('/', async(req, res, next) => {
  logueado = req.session.loggedin;
  const techs = await api.getTech();
  res.render('index', { title: 'Fran Giachero || Desarrollador Web', techs, logueado });
});
// CRUD TECHNOLOGIES
/* Add technologies - Post - Capturo datos desde form y los envio a bd */
router.post('/addTech', async (req, res) => {
  logueado = req.session.loggedin;
  const { technology, icon } = req.body;
  await api.addTech(technology, icon);
  const techs = await api.getTech();
  res.render('index', { title: 'Fran Giachero || Desarrollador Web', techs, logueado })
});
/* Delete technology */
router.get('/deleteTech/:id', async(req, res) => {
  logueado = req.session.loggedin;
  const techs = await api.getTech();
  const affectedRows = await api.deleteTech(req.params.id);
  console.log(req.params.id);
  if(affectedRows > 0) {
    res.redirect('/', {logueado});
  }else{
    res.send('Opss, lo siento algo ha salido mal!!');
  }
});
/* Edit technology */
router.get('/editTech/:id', async(req, res) => {
  logueado = req.session.loggedin;
  const tech = await api.getTechById(req.params.id);
  console.log(req.params.id);
  res.render('pages/editTech', { title: 'Editar tecnologia', tech, logueado})
});
router.post('/editTech/:id', async(req, res) => {
  logueado = req.session.loggedin;
  const id = req.params.id;
  const {technology, icon} = req.body
  await api.updateTech(id, technology, icon);
  res.redirect('/', {logueado});
});


// CRUD Sobre mi
/* GET about me. */
router.get('/aboutme', async(req, res, next) => {
  logueado = req.session.loggedin;
  const educations = await apiEducation.getEducation();
  const experiences = await apiExperience.getExperience();
  const resumes = await apiResume.getResume();
  res.render('pages/aboutme', { title: 'Sobre mi', educations, experiences, resumes, logueado });
});
/* Add education - Post */
router.post('/addEducation', async(req, res) => {
  logueado = req.session.loggedin;
  const { institute, title, icon, dateStart, dateEnd, statusEducation } = req.body;
  const educations = await apiEducation.getEducation();
  const experiences = await apiExperience.getExperience();
  const resumes = await apiResume.getResume();
  await apiEducation.addEducation(institute, title, icon, dateStart, dateEnd, statusEducation);
  res.render('pages/aboutme', { title: 'Sobre mí', educations, experiences, resumes, logueado});
});
/* Delete education */
router.get('/aboutme/deleteEducation/:id', async(req, res) => {
  logueado = req.session.loggedin;
const affectedRowsEducation = await apiEducation.deleteEducation(req.params.id);
if(affectedRowsEducation > 0) {
  res.redirect('/aboutme', {logueado});
}else{
  res.send('Opss, lo siento algo ha salido mal!!');
};
});
/* Edit education */
router.get('/aboutme/editEducation/:id', async(req, res) => {
  logueado = req.session.loggedin;
  const education = await apiEducation.getEducationById(req.params.id);
  res.render('pages/editEducation', { title: 'Editar Educación', education, logueado });
});
router.post('/aboutme/editEducation/:id', async(req, res) => {
  logueado = req.session.loggedin;
  const id = req.params.id;
  const { institute, title, icon, dateStart, dateEnd, statusEducation } = req.body
  await apiEducation.updateEducation(id, institute, title, icon, dateStart, dateEnd, statusEducation);
  res.redirect('/aboutme', {logueado});
});
/* EXPERIENCIA */
/* Add Experience - Post */
router.post('/aboutme/addExperience', async(req, res) => {
  logueado = req.session.loggedin;
  const { company, position, tasks, dateStart, dateEnd } = req.body;
  const experiences = await apiExperience.getExperience();
  const educations = await apiEducation.getEducation();
  await apiExperience.addExperience(company, position, tasks, dateStart, dateEnd);
  res.render('pages/aboutme', { title: 'Sobre mí', experiences, educations, logueado });
});
/* Delete Experience */
router.get('/aboutme/deleteExperience/:id', async(req, res) => {
  logueado = req.session.loggedin;
  const affectedRowsExperience = await apiExperience.deleteExperience(req.params.id);
  if(affectedRowsExperience > 0){
    res.redirect('/aboutme', {logueado});
  }else{
    res.send('Opss, lo siento algo ha salido mal!!');
  };
});
/* Edit Experience */
router.get('/aboutme/editExperience/:id', async(req, res) => {
  logueado = req.session.loggedin;
  const experience = await apiExperience.getExperienceById(req.params.id);
  res.render('pages/editExperience', { title: 'Editar Experiencia', experience, logueado });
});
router.post('/aboutme/editExperience/:id', async(req, res) => {
  logueado = req.session.loggedin;
  const id = req.params.id;
  const { company, position, tasks, dateStart, dateEnd } = req.body 
  await apiExperience.updateExperience(id, company, position, tasks, dateStart, dateEnd);
  res.redirect('/aboutme', {logueado});
});

/* RESUME */
/* Add Resume - Post */
router.post('/aboutme/addResume', async(req, res) => {
  logueado = req.session.loggedin;
  const { resume, motivationalPhrase } = req.body;
  const educations = await apiEducation.getEducation();
  const experiences = await apiExperience.getExperience();
  const resumes = await apiResume.getResume();
  await apiResume.addResume(resume, motivationalPhrase);
  res.render('pages/aboutme', { title: 'Sobre mí', educations, experiences, resumes, logueado});
});
/* Delete Resume */
router.get('/aboutme/deleteResume/:id', async(req, res) => {
  logueado = req.session.loggedin;
const affectedRowsResume = await apiResume.deleteResume(req.params.id);
if(affectedRowsResume > 0) {
  res.redirect('/aboutme', {logueado});
}else{
  res.send('Opss, lo siento algo ha salido mal!!');
};
});
/* Edit Resume */
router.get('/aboutme/editResume/:id', async(req, res) => {
  logueado = req.session.loggedin;
  const resume = await apiResume.getResumeById(req.params.id);
  res.render('pages/editResume', { title: 'Editar Resumen', resume, logueado });
});
router.post('/aboutme/editResume/:id', async(req, res) => {
  logueado = req.session.loggedin;
  const id = req.params.id;
  const { resume, motivationalPhrase } = req.body
  await apiResume.updateResume(id, resume, motivationalPhrase);
  res.redirect('/aboutme', {logueado});
});

/* GET projects. */
// CRUD PROJECTS
router.get('/projects', async(req, res) => {
  logueado = req.session.loggedin;
  const projects = await apiProject.getProject();
  const techs = await api.getTech();
  res.render('pages/projects', { title: 'Proyectos', projects, techs, logueado });
});
/* Add project */
router.post('/projects/addProject', async(req, res) => {
  logueado = req.session.loggedin;
  const { name, technologies, description, image, domain, repoGit } = req.body;
  await apiProject.addProject(name, technologies, description, image, domain, repoGit);
  const techs = await api.getTech();
  const projects = await apiProject.getProject();
  res.render('pages/projects', { title: 'Proyectos', projects, techs, logueado});
});
/* Delete project */
router.get('/projects/deleteProject/:id', async(req, res) => {
  logueado = req.session.loggedin;
  const affectedRowsProject = await apiProject.deleteProject(req.params.id);
  if(affectedRowsProject > 0) {
    res.redirect('/projects', {logueado});
  }else{
    res.send('Opss, lo siento algo ha salido mal!!');
  }
});
/* Edit Project */
router.get('/projects/editProject/:id', async(req, res) => {
  logueado = req.session.loggedin;
  const project = await apiProject.getProjectById(req.params.id);
  const techs = await api.getTech();
  res.render('pages/editProjects', { title: 'Editar proyecto', project, techs, logueado});
});
router.post('/projects/editProject/:id', async(req, res) => {
  logueado = req.session.loggedin;
  const id = req.params.id;
  const { name, technologies, description, image, domain, repoGit } = req.body
  await apiProject.updateProject(id, name, technologies, description, image, domain, repoGit);
  res.redirect('/projects', {logueado})
});

/* GET contact. */
router.get('/contact', function(req, res, next) {
  logueado = req.session.loggedin;
  res.render('pages/contact', { title: 'Contacto', logueado });
});

/* GET LoginAdmin */
router.get('/admin', async(req, res) => {
  logueado = req.session.loggedin;
  res.render('pages/loginAdmin', { title: 'Administrador', message: '', logueado})
});
router.post('/loginAdmin', async(req, res) => {
  const usuario = await api.getUser(req.body.username, req.body.password);
  let logueado;
  const { username, password } = req.body;
  const passMatch = await bcrypt.compare(username, password);
  if(username && password) {
    if(!passMatch) {
      req.session.loggedin = true;
      res.redirect('/');
    }else{
      res.render('pages/loginAdmin', { title: 'Administrador', message: 'El usuario o contraseña son incorrectos', logueado});
    }
  }else {
    res.render('pages/loginAdmin', { title: 'Administrador', message: 'Por favor ingrese un usuario y contraseña', logueado });
  }
});
router.get('/logout', async(req, res) => {
  const techs = await api.getTech();
  let logueado = false;
  req.session.destroy((err) => {
    console.log(err);
  });
  res.render('index', { title: 'Fran Giachero || Desarrollador Web', techs, logueado });
});
module.exports = router;
