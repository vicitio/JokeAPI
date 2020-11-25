const jsl = require("svjsl");
const http = require("http");
const fs = require("fs");
require('dotenv').config()

const settings = require("./settings.js");
const parseRequest = require("./requestParser.js");
const logRequest = require("./logRequest.js");

var indexFile = fs.readFileSync("./index.html", {encoding: "utf-8"});


console.log("\n\n\n\n\n\x1b[32m\x1b[1m Initializing...\x1b[0m");

const httpserver = http.createServer((req, res) => {
    fs.appendFileSync("./lastReqURL.log", req.url + "\n");
    var ipaddr = req.connection.remoteAddress;
    ipaddr = (ipaddr.length<15?ipaddr:(ipaddr.substr(0,7)==='::ffff:'?ipaddr.substr(7):undefined));

    logRequest(ipaddr, req.method, req.headers.joke_category);

    if(settings.server.allowCORS) {
        try {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Request-Method', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS');
			res.setHeader('Allow', 'GET,PUT,OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', '*');
        }
        catch(err) {
            console.log("\x1b[31m\x1b[1m Got Error while setting up CORS headers: " + err + "\x1b[0m");
            return process.exit(1);
        }
    }

    if(req.method == "GET" && !jsl.isEmpty(req.headers.joke_category)) {
        parseRequest(req, res);
    }
    else if(req.method == "GET" && jsl.isEmpty(req.headers.joke_category)) {
        res.writeHead(400, {"Content-Type": "text/html; utf-8"});
        res.end(indexFile);
        process.stdout.write("\x1b[33m\x1b[1m*\x1b[0m"); //docs
    }
    else if(req.method == "OPTIONS") {
        res.writeHead(400, {"Content-Type": "text/json; utf-8"});
        res.end(indexFile);
        process.stdout.write("\x1b[33m\x1b[1m$\x1b[0m");
    }
    else if(req.method == "PUT") {
        var body = '';
        req.on('data', function (data) {
            body += data;
            if(body == process.env.RESTART_TOKEN) {
                res.writeHead(200, "Ok", {"Content-Type": "text/plain;utf-8"});
                res.end("RESTART_SUCCESSFUL");
                return process.exit(2);
            }
            else {
                try {
                    let d = new Date();
                    let filename = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}              ${d.getHours()}+${d.getMinutes()}+${d.getSeconds()}+${d.getMilliseconds()}`;
                    fs.writeFile(`./data/submittedjokes/${filename}.json`, JSON.stringify(JSON.parse(body), null, 4), err => {
                        if(!err) {
                            res.writeHead(200, "Ok", {"Content-Type": "text/plain;utf-8"});
                            res.end("Success");
                        }
                        else {
                            res.writeHead(500, "Internal Server Error", {"Content-Type": "text/plain;utf-8"});
                            res.end(`Error while writing to file: ${err}`);
                        }
                    });
                }
                catch(err) {
                    res.writeHead(500, "Internal Server Error", {"Content-Type": "text/plain;utf-8"});
                    res.end(err);
                }
            }
        });
    }
    else {
        res.writeHead(405, {"Content-Type": "text/plain; utf-8"});
        res.end("Wrong method, please use GET instead");
    }
});


try {
    httpserver.listen(settings.server.port, null, function(error){
        if(!!error){
            console.log("\n\x1b[31m\x1b[1m error while initializing listener on 0.0.0.0:" + settings.server.port + " - " + error + "\x1b[0m");
            return process.exit(1);
        }
        else {
            console.log("\x1b[32m\x1b[1m > HTTP listener successfully started on 0.0.0.0:" + settings.server.port + "\x1b[0m\n");
            return true;
        }
    });
}
catch(err) {
    console.log("\n\x1b[31m\x1b[1m error while initializing HTTP listener on 0.0.0.0:" + settings.server.port + " - " + err + "\x1b[0m");
    process.exit(1);
}

try {
    setInterval(()=>{
        indexFile = fs.readFileSync("./index.html", {encoding: "utf-8"});
    }, 1000);
    fs.readFile(settings.jokePath, (err, data) => {
        if(jsl.isEmpty(err)) {
            console.log("\x1b[33m\x1b[1m Loaded " + JSON.parse(data).length + " jokes\x1b[0m\n\n");
            process.stdout.write("\x1b[1m\x1b[32m % Success   \x1b[31m# Error   \x1b[33m* Docs\x1b[0m   > ");
        }
    });
}
catch(err) {
    console.log("\n\x1b[31m\x1b[1m error while initializing HTTP listener on 0.0.0.0:" + settings.server.port + " - " + err + "\x1b[0m");
    return process.exit(1);
}