const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get('/words/:combination', function(req, res, next) {
    // Fetch data from DB, actually will fetch from external file
    // just because this is a demo
    res.writeHead(200, {'Content-Type': 'application/json'});
    fs.readFile('../resources/dictionary.json', null, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.send({data});
        }
        res.end();
    });

});

module.exports = router;
