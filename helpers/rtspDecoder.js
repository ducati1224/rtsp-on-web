const Stream = require("./node-rtsp-stream");

let stream = new Stream({
    name: "rtsp-stream",
    // streamUrl: streamLive,
    wsPort: 9999,
    width: 720,
    height: 480
});

// console.log('socket created')

module.exports = stream;
