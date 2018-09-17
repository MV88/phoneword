const express = require('express');
const router = express.Router();

// this is my (limited) database of words in json, it could be stored on mongodb for example
const words = require("../resources/words.json");

/**
 * based on the number the user has provided, it will return all the words matching that combination
*/
router.get('/words/:combination', function(req, res, next) {
    const combination = req.params.combination;
    res.status(200).json({
    		success: 1,
    		words: words.filter(w => combination == w.combination)
    });
    res.end();
});

module.exports = router;
