const client = new WebSocket('ws://192.168.3.21:9999');
const canvas = document.querySelector('canvas');
const player = new jsmpeg(client, {
    canvas: canvas
})