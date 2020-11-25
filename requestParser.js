const jsl = require("svjsl");
const fs = require("fs");

const settings = require("./settings.js");


module.exports = (req, res) => {
    var selectedJoke = "EMPTY";
    var jokeCategory = req.headers.joke_category;

    fs.readFile(settings.jokePath, (err, data) => {
        if(jsl.isEmpty(err)) {
            data = JSON.parse(data);
            var possibleJokes = [];
            var gt = false;
            if(jokeCategory.toLowerCase() != "any") {
                for(let i = 0; i < data.length; i++) {
                    if(data[i].category == jokeCategory) {
                        gt = true;
                        possibleJokes.push(data[i]);
                        // process.stdout.write("$");
                    }
                }
                if(!gt) {
                    res.writeHead(422, "Unprocessable Input Data", {"Content-Type": "text/plain; utf-8"});
                    process.stdout.write("\x1b[31m\x1b[1m#\x1b[0m"); //error
                    return res.end("joke_category header doesn't have the correct value. Use \"" + settings.available_categories.join(" or ") + "\" instead.");
                }
                let rN = jsl.randRange(0, (possibleJokes.length - 1));
                if(possibleJokes.length > 0) selectedJoke = possibleJokes[rN];
                else selectedJoke = possibleJokes[0];
                // process.stdout.write("m" + rN + "/" + (possibleJokes.length - 1));
            }
            else if(jokeCategory.toLowerCase() == "any") {
                let rN = jsl.randRange(0, (data.length - 1));
                // process.stdout.write("a" + rN + "/" + (data.length - 1));
                if(data.length > 0) selectedJoke = data[rN];
                else selectedJoke = data[0];
            }

            selectedJoke = JSON.stringify(selectedJoke, null, "\t");
            res.writeHead(200, "Ok", {"Content-Type": "application/json; utf-8"});
            process.stdout.write("\x1b[32m\x1b[1m%\x1b[0m"); //success
            return res.end(selectedJoke);
        }
        else {
            console.log("\n\x1b[31m\x1b[1m Got error while reading jokes file: \x1b[0m" + err);
            res.writeHead(500, "Internal Server Error", {"Content-Type": "text/plain; utf-8"});
            process.stdout.write("\x1b[31m\x1b[1m#\x1b[0m"); //error
            return res.end("Internal Error - Couldn't read jokes.json file - full error message: " + err);
        }
    });
}