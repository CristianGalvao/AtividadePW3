const express = require('express');
const app = express();

//Importando os models
const especialidade = require('./Model/especialidade');
const medico = require('./Model/medico');

const connection = require('./Database/database')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Importando os controllers
const especialidadeController = require('./Controller/especialiadadeController');
app.use('/', especialidadeController);

const medicoController = require('./Controller/medicoController');
app.use('/', medicoController);


app.listen(3005,
    
        ()=>{
            console.log('Rodando na porta 3005');
        }

    )