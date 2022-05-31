const express = require('express');
const pdf = require('html-pdf');
const app = express();
const fs = require('fs');
const invoice = fs.readFileSync('./index.html','utf-8');
const {config} = require('./config');
const port = 3000; 

app.get('/create', (req, res) => {
    pdf.create(invoice, config).toFile('invoice.pdf',(err, res) => {
        if(err) return console.log(err);
        console.log(res);
    });
    // pdf.create(invoice,config).toStream(function(err, stream){
    //     if(err) return console.log(err);
    //     stream.pipe(fs.createWriteStream('./invoice.pdf'));
    // });
    res.send('PDF created');
});

app.listen(port, () => console.log(`App listening on port ${port}`));
