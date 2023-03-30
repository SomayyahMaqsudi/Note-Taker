const path = require("path"); 
//module path provides utilities for working with file 


//module.exports = function(app) means this file has been exported as a function, you can access it by require('the-path-to-file.js').
module.exports = function(app){

    // should return html file
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// should return index.html
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);
};



// const express = require('express');
// const path = require('path');

// app.get('/db', (req, res) => res.send('Navigate to routes'));

// -->> should return html file

// app.get('/*', (req, res) => res.send('Navigate to'));

// -->> should return index.html 
