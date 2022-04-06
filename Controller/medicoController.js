const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();

const medico = require('../Model/medico');

router.get('/listarMedicos', (req, res)=>{
    medico.findAll().then(
        (medico)=>{
            res.send(medico);
        }
    );
});

router.post(
    '/cadastrarMedico',
    (req, res)=>{

        let {cod_especialidade} = req.body;
        let {nome_medico} = req.body;
        let {email_medico} = req.body;
        let {telefone_medico} = req.body;
        let {celular_medico} = req.body;

     

        medico.create(
            {cod_especialidade, nome_medico, email_medico, telefone_medico, celular_medico}

        ).then(
            ()=>{
                res.send('DADOS DE medico INSERIDOS COM SUCESSO!');
            }
        );
    }
);

//Get por ID
router.get('/listarMedicoId/:id', (req, res)=>{

    let {id} = req.params;

    medico.findByPk(id).then(
        (medico) => {res.send(medico)}
    );
})

router.put('/atualizarMedico', (req, res)=>{

    let {nome_medico, cod_medico} = req.body;

    medico.update(
        
        {nome_medico},
        {where: {cod_medico}}
    ).then(
        ()=>{
            res.send("Atualizado")
        }
    )

})

router.delete('/excluirMedico', (req,res)=>{
    
    let {cod_medico} = req.body;

    medico.destroy(
       
        {where: {cod_medico}}
    ).then(
        ()=>[
            res.send('DADOS EXCLUÌDOS')
        ]
    )
})

module.exports = router;  