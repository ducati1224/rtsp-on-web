const express = require('express');
const handleRtsp = require('./middleware/handleRtsp');
const stream = require('./helpers/rtspDecoder');
// express config
const app = express();
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

// create socket on port 9999
stream

// routing config
app.get("/", handleRtsp, function(req, res){
    res.render('index');
});










// listen on port 3000
app.listen(3000, function(){
    console.log('Listen on port 3000')
})