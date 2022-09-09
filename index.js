const http = require('http')
const MyModule = require("./MyModule");

const PORT = 5000;

const server = http.createServer(function(req, res) {
    const _myModule = new MyModule.MyModule("Mykola");

    res.write(_myModule.getGreetingMessage());
    res.end();
});

server.listen(PORT);

console.log(`Server listens to http://localhost:${PORT}`)