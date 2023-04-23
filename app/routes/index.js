var express = require('express');
var router = express.Router();
const api = require('../api');

/* GET home page. */
router.get('/', async(req, res, next) => {
  const techs = await api.getTech();
  res.render('index', { title: 'Fran Giachero || Desarrollador Web', techs });
});
/* Add technologies - Post - Capturo datos desde form y los envio a bd */
router.post('/addTech', async (req, res) => {
  const { technology, icon } = req.body;
  await api.addTech(technology, icon);
  const techs = await api.getTech();
  res.render('index', { title: 'Fran Giachero || Desarrollador Web', techs })
});
/* Delete technology */
router.get('/:id', async(req, res) => {
  const techs = await api.getTech();
  const affectedRows = await api.deleteTech(req.params.id);
  console.log(req.params.id);
  if(affectedRows > 0) {
    res.redirect('/');
  }else{
    res.send('Opss, lo siento algo ha salido mal!!');
  }
});

/* GET projects. */
router.get('/projects', function(req, res, next) {
  res.render('pages/projects', { title: 'Proyectos' });
});
/* GET about me. */
router.get('/aboutme', function(req, res, next) {
  res.render('pages/aboutme', { title: 'Sobre mi' });
});
/* GET contact. */
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'Contacto' });
});

module.exports = router;
