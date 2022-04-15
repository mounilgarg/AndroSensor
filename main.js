if(process.env.NODE_ENV!=='production'){
  require('dotenv').config()
}
// import csvDb from 'indexDb.js';
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');
const statsRouter = require('./routes/stats');
const csv = require('csv-parser');
const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const fs = require('fs');
const ejs = require('ejs');

const results = [];

app.set('view engine','ejs');
app.set('views','views');
app.set('layout','layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

const mongoose = require('mongoose');
const csvData = require('./models/indexDb');

// mongoose.connect(process.env.DATBASE_URI,{useNewUrlParser:true});
mongoose.connect("mongodb+srv://mg:%40%23Panchi22Cluster0@cluster0.olgru.mongodb.net/CSV?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on('error',error=>console.error(error));
db.once('open',() => console.log('connected to mongoose'));

app.use('/',indexRouter);
app.use('/stats',statsRouter);

app.listen(process.env.PORT || 5000);


// THIS WAS TO USE CSV FILES DIRECTLY IMPORTED IN THE PROJECT
// fs.createReadStream('record3.csv')
//     .pipe(csv({}))
//     .on('data',(data)=>
//     {
//       results.push(data);
//     })
//     .on('end',()=>{
//         // console.log(results);
//     });
   csvData.find({},function(err,data){
      if(err) console.log(err);
      console.log(data);
    })
  