const Stream = require("node-rtsp-stream");

const rtspDecoder = function(req, res, next){
    const streamUrl = "rtsp://admin:admin@192.168.3.201:3454/Media/Database/Normal?HNAME=C_1&LOCTIME=true&STIME=20180904_172000&ETIME=20180904_173000";

    let stream = new Stream({
        name: 'rtsp-stream',
        streamUrl: streamUrl,
        wsPort: 9999,
        width: 720,
        height: 480
    });

    next();
}

module.exports = rtspDecoder;