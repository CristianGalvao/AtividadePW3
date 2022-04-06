const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();

const especialidade = require('../Model/especialidade');

router.get('/listarEspecialidades', (req, res)=>{
    especialidade.findAll().then(
        (especialidade)=>{
            res.send(especialidade);
        }
    );
});

router.post(
    '/cadastrarEspecialidade',
    (req, res)=>{

        let { nome_especialidade } = req.body;

        especialidade.create(
            {nome_especialidade}

        ).then(
            ()=>{
                res.send('DADOS DE ESPECIALIDADE INSERIDOS COM SUCESSO!');
            }
        );
    }
);

//Get por ID
router.get('/listarEspecialidadeId/:id', (req, res)=>{

    let {id} = req.params;

    especialidade.findByPk(id).then(
        (especialidade) => {res.send(especialidade)}
    );
})

router.put('/atualizarEspecialidade', (req, res)=>{

    let {nome_especialidade, cod_especialidade} = req.body;

    especialidade.update(
        
        {nome_especialidade},
        {where: {cod_especialidade}}
    ).then(
        ()=>{
            res.send("Atualizado")
        }
    )

})

router.delete('/excluirEspecialidade', (req,res)=>{

    let {cod_especialidade} = req.body;

    especialidade.destroy(
       
        {where: {cod_especialidade}}
    ).then(
        ()=>[
            res.send('DADOS EXCLUÌDOS')
        ]
    )
})

module.exports = router;  