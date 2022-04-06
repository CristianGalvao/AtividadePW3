
const Sequelize = require('sequelize');

const connection = require('../Database/database');

const especialidade = connection.define(

        'tbl_especialidade',
        {
            cod_especialidade: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },

            nome_especialidade:{
                type: Sequelize.STRING(100)
            }
        }

);

// especialidade.sync({force: true})

module.exports = especialidade;

