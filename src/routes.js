const express = require('express');
const CompanyCrontroller = require('./controller/CompanyCrontroller');

const routes = express.Router();

routes.get('/company', CompanyCrontroller.index);
routes.post('/company/:id', CompanyCrontroller.create);

routes.get('/',(req, res) => {
    res.send({e:"e"});
});

module.exports = routes;