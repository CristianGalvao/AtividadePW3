const Sequelize = require('sequelize');
const connection = require('../Database/database');

const especialidade = require('../Model/especialidade');

const medico = connection.define(

    'tbl_medico',
    {
        cod_medico:{
            type: Sequelize.INTEGER(10),
            autoIncrement: true,
            primaryKey: true
        },

        cod_especialidade:{
            type: Sequelize.INTEGER(10),
        },

        nome_medico:{
            type: Sequelize.STRING(500),
        },

        email_medico:{
            type: Sequelize.STRING(100),
        },

        telefone_medico:{
            type: Sequelize.STRING(10),
        },

        celular_medico:{
            type: Sequelize.STRING(11),
        }
    } 

);

// Colocando chave estrangeira | Lado Muitos N
especialidade.hasMany(medico);

// Colocando chave Primaria | Lado Muitos 1
medico.belongsTo(especialidade);

// medico.sync({force: true});

module.exports = medico;