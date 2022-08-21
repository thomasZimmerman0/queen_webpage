const express = require('express');
const router = express.Router();
const socket = require('socket.io')


router.get('/chatroom', (req, res)=>{

    res.render('chatroom')
    
})

module.exports = router;