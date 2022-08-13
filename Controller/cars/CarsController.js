const express = require('express');
const router = express.Router();
const Car = require('../../Model/Car');
const Brand = require('../../Model/Brand');

//consulta todos os veiculos com a sua marca
router.get('/cars', (req, res) => {
    Car.findAll({
        include: [{model: Brand,  attributes: ['name']}],
    })
    .then(cars => {
        res.statusCode = 200
        res.json(cars);
    })
});

//Consulta o carro pelo id
router.get('/cars/:id', (req, res) => {
    Car.findOne().then(()=>{});
});

router.post('/cars/create', (req, res) =>{

    var {name, year, color, idBrand} = req.body;
    
   
    if(name != undefined && name != ""){
        if(year != undefined && year != "") {
            if(color != undefined && color != ""){
                Car.create({
                    name: name,
                     year: year,
                    color: color,
                    tbBrandId :idBrand
                }).then(() => {
                    res.sendStatus(201);
                })
            }
        } 
    } else {
        res.json()
    }
                
});

router.delete('/car/:id', (req, res) => {
    var id = parseInt(req.params.id);
    if(id != undefined && !isNaN(id)) {
        Car.destroy({
            where: {
                id: id
            }
        }).then(() => {
            res.sendStatus(200);
        });
    } else {
        res.sendStatus(400);
    }
    
});

module.exports = router;