'use strict';

const express = require('express');
const router = express.Router();
const { endpoints } = require('../config');

router.get('/', (req, res, next) => {
    res.render('index', {
        urls: endpoints
    });
});

module.exports = router;