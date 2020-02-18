const express = require('express');
let router = express.Router();

// QueryString => query property on the request object
// localhost:3000/person?name=sundar&age=22
router.get('/person', (req, res) => {
    if(req.query.name){
        res.send(`Requested a person in query ${req.query.name}`);
    }
    else{
        res.send('Null person');
    }
});

// Params property on the request object
// localhost:3000/person/sundar
router.get('/person/:name', (req, res) => {
    res.send(`Requested a person ${req.params.name}`);
});

// Exporting this custom route to the directory for use
module.exports = router;