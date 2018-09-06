const stream = require('../helpers/rtspDecoder');

const streamUrl =
    "rtsp://admin:admin@192.168.3.201:3454/Media/Database/Normal?HNAME=C_1&LOCTIME=true&STIME=20180904_172000&ETIME=20180904_172005";

const streamLive =
    "rtsp://admin:admin@192.168.3.201:3454/Media/Live/Normal?camera=C_1&streamindex=1";

const handleRtsp = function(req, res, next){
    var options = req.query;
    console.log(options);
    
    if (options.a === '0') {
        stream.streamUrl = streamUrl;
        stream.startMpeg1Stream();
    }

    // stream.streamUrl = streamUrl;
    // stream.startMpeg1Stream();
    next();
}


module.exports = handleRtsp;