const express = require('express');
const app = express();
const con = require('./database/database');

app.use(express.json());
app.use(express.urlencoded({extended:false}));


const carsController = require('./Controller/cars/CarsController');
const brandsController = require('./Controller/brands/BrandsController');

con
    .authenticate()
    .then(() =>{
        console.log('Conectado ao banco');
    }).catch((error) => {
        console.log(error);
    });

app.use('/', carsController);
app.use('/', brandsController);


//iniciando o servidor    
app.listen(4000, () => {
    console.log("Servidor rodando");
});