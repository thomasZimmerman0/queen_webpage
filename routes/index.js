const { response } = require('express');
const express = require('express');
const router = express.Router();

//import data from data.json

const dataFile = require('../data/data.json')

//let pageSpeakers = dataFile.speakers

router.get('/', (req, res)=>{

    res.render('index')

})

module.exports = router;