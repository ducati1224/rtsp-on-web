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
    } else if (options.live === 'false') {
        message = `Playback on server ${options.s} channel ${options.c.slice(2)} from ${options.start.slice(0, 4)}/${options.start.slice(4, 6)}/${options.start.slice(6, 8)} ${options.start.slice(9, 11)}:${options.start.slice(11, 13)}:${options.start.slice(13)} to ${options.end.slice(0, 4)}/${options.end.slice(4, 6)}/${options.end.slice(6, 8)} ${options.end.slice(9, 11)}:${options.end.slice(11, 13)}:${options.end.slice(13)}`;
    }
    res.render('index', {message});
});










// listen on port 3000
app.listen(3000, function(){
    console.log('Listen on port 3000')
})