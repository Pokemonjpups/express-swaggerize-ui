/**
 * Created by GROOT on 2017/3/28.
 */
const path = require('path');
const express = require('express');
const fs = require('fs');

module.exports = function swaggerUi(options) {

    options = options || {};
    var router = new express.Router();

    // store the file in memory to improve performance
    const template = path.resolve(__dirname, 'static/index.html')
    let html = fs.readFileSync(template, 'UTF-8')
    html = html.replace(/\{\{ROUTE\}\}/ig, (options.route || 'api-docs')).replace(/\{\{DOCS\}\}/ig, (options.docs || 'api-docs.json'))
    // get
    router.get('/', function (req, res) {
        res.send(html)
    })
    router.use(express.static(path.resolve(__dirname, 'static')));

    return router;
};
