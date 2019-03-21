const express = require('express');
var app = express();
//const serveStatic = require("serve-static");
const path = require('path');

app.use(express.static(path.join(__dirname, '/')));

// app.get('/', function(req,res){
//   res.sendFile('index.html', {root: path.join(__dirname, '/')}) 
// });

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/index.html'))
})

app.listen(8080, function(){
  console.log((new Date()) + " Server is listening on port 8080");
});