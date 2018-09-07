const express = require('express');
const handleRtsp = require('./middleware/handleRtsp');
const stream = require('./helpers/rtspDecoder');
// express config
const app = express();
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

// create socket on port 9999
var ws = stream;

// routing config
app.get("/", handleRtsp, function(req, res){
    const options = req.query;
    var message = '';
    if (options.live === 'true') {
        message = `Live on server ${options.s} channel ${options.c.slice(2)}`
    }
    res.render('index', {message});
});










// listen on port 3000
app.listen(3000, function(){
    console.log('Listen on port 3000')
})