if(process.env.NODE_ENV!=='production'){
  require('dotenv').config()
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');
const csv = require('csv-parser');
const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const fs = require('fs');
const results = [];

app.set('view engine','ejs');
app.set('views','views');
app.set('layout','layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

// const mongoose = require('mongoose');

// mongoose.connect(process.env.DATBASE_URL,{useNewUrlParser:true});
// const db = mongoose.connection;
// db.on('error',error=>console.error(error));
// db.once('open',() => console.log('connected to mongoose'));

app.use('/',indexRouter);

app.listen(process.env.PORT || 3000);



fs.createReadStream('record3.csv')
    .pipe(csv({}))
    .on('data',(data)=>
    {
      results.push(data);
    })
    .on('end',()=>{
        console.log(results);
    });
    