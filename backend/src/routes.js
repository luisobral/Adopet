const express = require('express');
const OngController = require('./controllers/OngController');
const AnimalsController = require('./controllers/AnimalsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const RacaController = require('./controllers/RacaController');
const CategoriaController = require('./controllers/CategoriaController');
const VacinaController = require('./controllers/VacinaController');
const HistoricoController = require('./controllers/HistoricoController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/racas', RacaController.index);
routes.post('/racas', RacaController.create);
routes.delete('/racas/:id', RacaController.delete);

routes.get('/vacinas', VacinaController.index);
routes.post('/vacinas', VacinaController.create);
routes.delete('/vacinas/:id', VacinaController.delete);

routes.get('/historicos', HistoricoController.index);
routes.post('/historicos', HistoricoController.create);
routes.delete('/historicos', HistoricoController.delete);

routes.get('/categorias', CategoriaController.index);
routes.post('/categorias', CategoriaController.create);
routes.delete('/categorias/:id', CategoriaController.delete);

routes.get('/animals',AnimalsController.index);
routes.post('/animals',AnimalsController.create);
routes.delete('/animals/:id', AnimalsController.delete);

routes.get('/profile',ProfileController.index);

module.exports = routes;