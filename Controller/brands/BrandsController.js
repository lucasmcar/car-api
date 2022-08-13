const express = require('express');
const router = express.Router();
const Brand= require('../../Model/Brand');

router.get('/brands', (req, res) => {
    Brand.findAll()
    .then(brands => {
        res.statusCode = 200
        res.json(brands);
    })
});

router.get('/brands/:id', (req, res) => {

});

router.post('/brands/create', (req, res) =>{

    var {name} = req.body;
    
   
    if(name != undefined && name != ""){
        Brand.create({
            name: name,
        }).then(() => {
            res.sendStatus(201);
        });    
    } else {
        res.json()
    }
                
});






module.exports = router;