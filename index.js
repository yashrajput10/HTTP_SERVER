const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {

    console.log(req.url);

    switch (req.url) {
        case "/":
            res.end("Hello World!");
            break;
        case "/home":
            res.end("Welcome To Home Page...");
            break;
        case "/about":
            res.end("Welcome To About Page...");
            break;
        case "/contact":
            res.end("Welcome To Contact Page...");
            break;
        case "/user":
            res.end("Welcome To User Page...");
            break;

        default:
            res.end("server not  found...");
    }
})

server.listen(port, () => {
    console.log(`server start $(port)`);
})