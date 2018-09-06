const stream = require('../helpers/rtspDecoder');
const vmsList = require('../helpers/config');

const handleRtsp = function(req, res, next){
    var options = req.query;
    var rtspUrl = '';
    if (options.s) {
        if (vmsList[options.s]) {
            const vmsServer = vmsList[options.s];
            const { account, password, ip, port } = vmsServer;
            if (options.live === 'true') {
                rtspUrl = `rtsp://${account}:${password}@${ip}:${port}/Media/Live/Normal?camera=${options.c}&streamindex=1`;
            } else {
                rtspUrl = `rtsp://${account}:${password}@${ip}:${port}/Media/Database/Normal?HNAME=${options.c}&LOCTIME=true&STIME=${options.start}&ETIME=${options.end}`;
            }
            stream.streamUrl = rtspUrl;
            // stream.mpeg1Muxer.stream.kill("SIGINT");
            stream.startMpeg1Stream();
        } else {
            res.send(`Can't not find VMS server ${options.s}`)
        }
    }
    
    next();
}


module.exports = handleRtsp;