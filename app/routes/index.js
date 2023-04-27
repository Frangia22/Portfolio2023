var express = require('express');
var router = express.Router();
const api = require('../api');
const apiEducation = require('../api/education');
const apiExperience = require('../api/experience');
const apiResume = require('../api/resume');
const db = require('../models');

/* GET home page. */
router.get('/', async(req, res, next) => {
  const techs = await api.getTech();
  res.render('index', { title: 'Fran Giachero || Desarrollador Web', techs });
});
// CRUD TECHNOLOGIES
/* Add technologies - Post - Capturo datos desde form y los envio a bd */
router.post('/addTech', async (req, res) => {
  const { technology, icon } = req.body;
  await api.addTech(technology, icon);
  const techs = await api.getTech();
  res.render('index', { title: 'Fran Giachero || Desarrollador Web', techs })
});
/* Delete technology */
router.get('/deleteTech/:id', async(req, res) => {
  const techs = await api.getTech();
  const affectedRows = await api.deleteTech(req.params.id);
  console.log(req.params.id);
  if(affectedRows > 0) {
    res.redirect('/');
  }else{
    res.send('Opss, lo siento algo ha salido mal!!');
  }
});
/* Edit technology */
router.get('/editTech/:id', async(req, res) => {
  const tech = await api.getTechById(req.params.id);
  console.log(req.params.id);
  res.render('pages/editTech', { title: 'Editar tecnologia', tech})
});
router.post('/editTech/:id', async(req, res) => {
  const id = req.params.id;
  const {technology, icon} = req.body
  await api.updateTech(id, technology, icon);
  res.redirect('/');
});


// CRUD Sobre mi
/* GET about me. */
router.get('/aboutme', async(req, res, next) => {
  const educations = await apiEducation.getEducation();
  const experiences = await apiExperience.getExperience();
  const resumes = await apiResume.getResume();
  res.render('pages/aboutme', { title: 'Sobre mi', educations, experiences, resumes });
});
/* Add education - Post */
router.post('/addEducation', async(req, res) => {
  const { institute, title, icon, dateStart, dateEnd, statusEducation } = req.body;
  const educations = await apiEducation.getEducation();
  const experiences = await apiExperience.getExperience();
  await apiEducation.addEducation(institute, title, icon, dateStart, dateEnd, statusEducation);
  res.render('pages/aboutme', { title: 'Sobre mí', educations, experiences});
});
/* Delete education */
router.get('/aboutme/deleteEducation/:id', async(req, res) => {
const affectedRowsEducation = await apiEducation.deleteEducation(req.params.id);
if(affectedRowsEducation > 0) {
  res.redirect('/aboutme');
}else{
  res.send('Opss, lo siento algo ha salido mal!!');
};
});
/* Edit education */
router.get('/aboutme/editEducation/:id', async(req, res) => {
  const education = await apiEducation.getEducationById(req.params.id);
  res.render('pages/editEducation', { title: 'Editar Educación', education });
});
router.post('/aboutme/editEducation/:id', async(req, res) => {
  const id = req.params.id;
  const { institute, title, icon, dateStart, dateEnd, statusEducation } = req.body
  await apiEducation.updateEducation(id, institute, title, icon, dateStart, dateEnd, statusEducation);
  res.redirect('/aboutme');
});
/* EXPERIENCIA */
/* Add Experience - Post */
router.post('/aboutme/addExperience', async(req, res) => {
  const { company, position, tasks, dateStart, dateEnd } = req.body;
  const experiences = await apiExperience.getExperience();
  const educations = await apiEducation.getEducation();
  await apiExperience.addExperience(company, position, tasks, dateStart, dateEnd);
  res.render('pages/aboutme', { title: 'Sobre mí', experiences, educations });
});
/* Delete Experience */
router.get('/aboutme/deleteExperience/:id', async(req, res) => {
  const affectedRowsExperience = await apiExperience.deleteExperience(req.params.id);
  if(affectedRowsExperience > 0){
    res.redirect('/aboutme');
  }else{
    res.send('Opss, lo siento algo ha salido mal!!');
  };
});
/* Edit Experience */
router.get('/aboutme/editExperience/:id', async(req, res) => {
  const experience = await apiExperience.getExperienceById(req.params.id);
  res.render('pages/editExperience', { title: 'Editar Experiencia', experience });
});
router.post('/aboutme/editExperience/:id', async(req, res) => {
  const id = req.params.id;
  const { company, position, tasks, dateStart, dateEnd } = req.body 
  await apiExperience.updateExperience(id, company, position, tasks, dateStart, dateEnd);
  res.redirect('/aboutme');
});

/* RESUME */
/* Add Resume - Post */
router.post('/aboutme/addResume', async(req, res) => {
  const { resume, motivationalPhrase } = req.body;
  const educations = await apiEducation.getEducation();
  const experiences = await apiExperience.getExperience();
  const resumes = await apiResume.getResume();
  await apiResume.addResume(resume, motivationalPhrase);
  res.render('pages/aboutme', { title: 'Sobre mí', educations, experiences, resumes});
});
/* Delete Resume */
router.get('/aboutme/deleteResume/:id', async(req, res) => {
const affectedRowsResume = await apiResume.deleteResume(req.params.id);
if(affectedRowsResume > 0) {
  res.redirect('/aboutme');
}else{
  res.send('Opss, lo siento algo ha salido mal!!');
};
});
/* Edit Resume */
router.get('/aboutme/editResume/:id', async(req, res) => {
  const resume = await apiResume.getResumeById(req.params.id);
  res.render('pages/editResume', { title: 'Editar Resumen', resume });
});
router.post('/aboutme/editResume/:id', async(req, res) => {
  const id = req.params.id;
  const { resume, motivationalPhrase } = req.body
  await apiResume.updateResume(id, resume, motivationalPhrase);
  res.redirect('/aboutme');
});

/* GET projects. */
router.get('/projects', function(req, res, next) {
  res.render('pages/projects', { title: 'Proyectos' });
});
/* GET contact. */
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'Contacto' });
});

module.exports = router;
