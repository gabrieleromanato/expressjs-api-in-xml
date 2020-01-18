'use strict';

const express = require('express');
const router = express.Router();
const data = require('../data');
const XMLWriter = require('../classes/XMLWriter');

router.use((req, res, next) => {
    res.set('Content-Type', 'text/xml');
    next();
});

router.get('/posts', (req, res, next) => {
   const posts = data.slice(0, 3);
   const writer = new XMLWriter({ root: 'posts', data: posts, itemName: 'post'} );
   res.send(writer.write());
});

router.get('/posts/:id', (req, res, next) => {
    const { id } = req.params;
    const post = data.find(d => { return d.id === id; });
    if(post) {
        const writer = new XMLWriter({ root: 'posts', data: [post], itemName: 'post'} );
        res.send(writer.write());
    } else {
        res.status(404);
        res.send(new XMLWriter({ root: 'errors', data: [{ status: 404 }], itemName: 'error'} ).write());
    }
 });

module.exports = router;