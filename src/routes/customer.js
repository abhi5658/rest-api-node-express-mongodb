const CustomerModel = require('../models/customer.model');
const express = require('express');
const router = express.Router();

// CREATE a new customer
router.post('/customer', (req, res) => {
    if(!req.body){
        return res.status(400).send('Request body is missing!');
    }

    // let user = {
    //     name: 'firstname lastname',
    //     email: 'firstname@domain.com'
    // }

    let model = new CustomerModel(req.body)
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0){
                return res.status(500).send(doc)
            }

            res.status(201).send(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

// READ GET
router.get('/customer', (req,res) => {
    if(!req.query.email){
        return res.status(400).send('Missing URL query parameters: Email');
    }
    CustomerModel.findOne({
        email: req.query.email
    })
        .then(doc => {
            res.json(doc);
        })
        .catch(err =>{
            res.status(500).json(err);
        })
})

// UPDATE
router.put('/customer', (req,res) => {
    if(!req.query.email){
        return res.status(400).send('Missing URL query parameters: Email');
    }
    CustomerModel.findOneAndUpdate({
        email: req.query.email
    }, req.body, {
        new: true
    })
        .then(doc => {
            res.json(doc);
        })
        .catch(err =>{
            res.status(500).json(err);
        })
})

// DELETE
router.delete('/customer', (req,res) => {
    if(!req.query.email){
        return res.status(400).send('Missing URL query parameters: Email');
    }
    CustomerModel.findOneAndRemove({
        email: req.query.email
    })
        .then(doc => {
            res.json(doc);
        })
        .catch(err =>{
            res.status(500).json(err);
        })
});

module.exports = router;
