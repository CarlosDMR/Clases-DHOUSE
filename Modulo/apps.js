let fs = require("fs");
let moments = require('moment');

//console.log(fs);

let doc = fs.readFileSync(__dirname + "/hola.txt", 'utf-8');


console.log(doc, moments().format('MMM Do YYYY'));

let superH = require("./Superheroes");

console.log(superH[0]);