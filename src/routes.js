const express = require('express');
const CompanyCrontroller = require('./controller/CompanyCrontroller');

const routes = express.Router();


routes.get('/', (req, res) => {
    res.send('Salveeeeeeeeeeeee')
});


routes.get('/company', CompanyCrontroller.index);
routes.post('/company', CompanyCrontroller.store);
routes.post('/company/:id', CompanyCrontroller.create);
module.exports = routes;