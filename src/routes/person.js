const express = require('express');
let router = express.Router();

// QueryString => query property on the request object
router.get('/person', (req, res) => {
    if(req.query.name){
        res.send(`Requested a person ${req.query.name}`);
    }
    else{
        res.send('Null person');
    }
});

// Params property on the request object
router.get('/person/:name', (req, res) => {
    res.send(`Requested a person ${req.params.name}`);
});

module.exports = router;