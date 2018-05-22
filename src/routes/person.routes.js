const express = require('express');

const personRoutes = express.Router();


personRoutes.get('/test', (req, res) => {

    res.send('test person routes');
});

module.exports = personRoutes;