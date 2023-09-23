let fs = require("fs");
const key = fs.readFileSync("./cert/CA/localhost/localhost.decrypted.key");
const cert = fs.readFileSync('./cert/CA/localhost/localhost.crt');
let http = require("https");
let app = require("express")();
let server = http.createServer({key,cert},app);
let router = require("./router.js");
let {Server} = require("socket.io");
let io = new Server(server);
const port = 3000;
const myKey = 1991;

let storeData = {};

app.use(router);

io.on("connection", (socket) => {

    socket.on("connectDesktop", (e) => {
        let reVal = false;
        if (e.key == myKey) {
            reVal = true
        }
        io.emit("connectDesktopStatus", {status:reVal, key:myKey});
    });

    socket.on("sensorData", (e) => {
        io.emit("dataToDesktop", e);
        console.log(e);
    });
});

server.listen(port);