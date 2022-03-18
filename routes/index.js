const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const csvData = require('../models/indexDb');

//home localhost:3000 route will render index.ejs
// get method displays data on the webpage
router.get('/', async (req,res)=>{
    // res.send("hello");
    const d = await csvData.find();
    
    // here data is the name we use toaccess db in ejs file
    res.render('index',{"cData":d});
    
});



module.exports=router;