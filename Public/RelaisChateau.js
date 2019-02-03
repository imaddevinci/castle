var request = require("request");
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
const cheerio = require('cheerio');
let scoreArr  = [];
const fetch = require('node-fetch');




async function sandbox(){

const response = await fetch ("https://www.relaischateaux.com/fr/update-destination-results",
{"credentials":"include","headers":{"accept":"*/*","accept-language":"fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7","content-type":"application/x-www-form-urlencoded; charset=UTF-8","x-requested-with":"XMLHttpRequest"},"referrer":"https://www.relaischateaux.com/fr/destinations/europe/france","referrerPolicy":"origin-when-cross-origin","body":"page=1&areaId=78","method":"POST","mode":"cors"})


//console.log(await response.json());
var $ = cheerio.load(response.text());
console.log($.json());






//var $ = cheerio.load(response);
//var root = $._root.children().first();
//console.log($);

}


sandbox();
//var text = $._root.children('.fastTrack destDatePicker')
//console.log( text);
/*
request(
    { responses },
function(error, response, body) {
	
	//console.log(cheerio(responses));
	
}
);
*/