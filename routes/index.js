const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const csvData = require('../models/indexDb');
const ejs = require('ejs');



//home localhost:5000 route will render index.ejs
// get method displays data on the webpage
router.get('/', async (req,res)=>{
    // here cdata is the name we use toaccess db in ejs file
    csvData.find({},function(err,data){
        res.render('index',{cData:data});
    })
      
});
app.get('/stats', (req, res) => {

    res.render('stats');
    
    });
// router.get('/stats', async (req,res)=>{
//     // here cdata is the name we use toaccess db in ejs file
//     csvData.find({},function(err,data){
//         res.render('stats',{cData:data});
//     })
      
// });
// app.use('/stats',require('./stats'));

module.exports=router;