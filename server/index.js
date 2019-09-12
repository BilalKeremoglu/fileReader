import test from './test';

test("BABEL IS WORKING!!!");

import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import readline from 'readline';

//deneme
let cities = [
    { name: 'Istanbul', country: 'Turkey' },
    { name: 'New York', country: 'USA' },
    { name: 'London', country: 'England' }
];

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//deneme
app.get('/api/cities', function (request, response) {
    response.send(cities);
});
//deneme
app.post('/api/cities', function (request, response) {
    var city = request.body;
    console.log(city);
    for (var index = 0; index < cities.length; index++) {
        if (cities[index].name === city.name) {
            response.status(500).send({ error: "Bu şehir zaten kayıtlı" });
            return;
        }
    }

    cities.push(city);
    response.send(cities);
});

//app

const test3 = (n, filepath) => {
    return new Promise(function (resolve, reject) {
        let cursor = 0
            , input = fs.createReadStream(filepath)
            , rl = readline.createInterface({ input })

        rl.on('line', function (line) {
            if (cursor++ === n) {
                rl.close()
                input.close()
                resolve(line.split(" "));
            }
        })
    })
}

var stringArray = [];
let iter = 8;
let obj = [];
for (let j = 0; j < 3; j++) {
    let data = test3(iter, "show-ip-interface.txt")
    data.then(function (result) {
        for (var i = 0; i < result.length; i++) {
            if (result[i] !== "") {
                stringArray.push(result[i]);
            }
        }
        
        console.log("--------------------");
    });



    iter++;

}

setTimeout(function () {
    for (let i = 0; i < stringArray.length; i += 5) {
        obj.push(
            {
                Interface: stringArray[i],
                State: stringArray[i + 1],
                Ip_Address: stringArray[i + 2],
                Ip_Mask: stringArray[i + 3],
                Method: stringArray[i + 4]
            }
        );
    }
}, 3000);

setTimeout(function () { console.log(obj) }, 5000);


app.get('/api/config', function (request, response) {
    response.send(JSON.stringify(obj));
});

app.listen(3000, function () {
    console.log("Port dinleniyor 3000...");
});