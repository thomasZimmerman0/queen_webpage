const express = require('express');
const router = express.Router();

//import data from data.json

const dataFile = require('../data/data.json')

let albums = dataFile.albums

router.get('/albums', (req, res)=>{
    
    let albumObj = []

    let albumCovers = []

    albums.forEach((album)=>{
        albumCovers = albumCovers.concat(album.artwork)
        albumObj = albumObj.concat(album)
    })

    res.render('albums', {
        albumObj : albumObj,
        albumCovers : albumCovers,

    })

})

router.get('/albums/:shortname', (req, res)=>{
    
    let shortName = req.params.shortname; 

    let albumObj = []

    albums.forEach((album)=>{
        if(album.shortname == shortName){
            albumObj.push(album)
        }
    })

    res.render('albums', {
        albumObj : albumObj
    })

})

module.exports = router;