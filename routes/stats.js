const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const csvData = require('../models/indexDb');
const ejs = require('ejs');



// home/stats localhost:5000 route will render stats.ejs
// get method displays data on the webpage

router.get('/', async (req,res)=>{
    // here cdata is the name we use toaccess db in ejs file
    csvData.find({},function(err,data){
        res.render('stats',{cData:data});
    })
      
});



module.exports=router;