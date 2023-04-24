var express = require('express');
var router = express.Router();
const api = require('../api');
const apiEducation = require('../api/education');

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
  res.render('pages/aboutme', { title: 'Sobre mi', educations });
});
/* Add education - Post */
router.post('/addEducation', async(req, res) => {
  const { institute, title, icon, dateStart, dateEnd, statusEducation } = req.body;
  const educations = await apiEducation.getEducation();
  await apiEducation.addEducation(institute, title, icon, dateStart, dateEnd, statusEducation);
  res.render('pages/aboutme', { title: 'Sobre mí', educations});
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

/* GET projects. */
router.get('/projects', function(req, res, next) {
  res.render('pages/projects', { title: 'Proyectos' });
});
/* GET contact. */
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'Contacto' });
});

module.exports = router;
