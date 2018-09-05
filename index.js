const express = require('express');
const rtspDecoder = require('./middleware/rtspDecoder');

// express config
const app = express();
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

// routing config
app.get("/", rtspDecoder,function(req, res){
    res.render('index');
})










// listen on port 3000
app.listen(3000, function(){
    console.log('Listen on port 3000')
})