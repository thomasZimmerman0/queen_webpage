const express = require('express');
const router = express.Router();

//import data from data.json
const fs = require('fs')

const messages = require('../data/comments.json')

router.get('/forum', (req, res)=>{
    
    res.render('chatbot')

})

router.get('/api', (req, res)=>{

    res.json(messages)
})

router.post('/api', (req, res)=>{

    messages.unshift(req.body)

    fs.writeFile('data/comments.json', JSON.stringify(messages), 'utf-8', err=>{
        if(err){
            res.status(404).send(err)
        }
    })

    res.json(messages)

})

module.exports = router;