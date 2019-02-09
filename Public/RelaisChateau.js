var request = require("request");
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
const cheerio = require('cheerio');
let scoreArr  = [];
const fetch = require('node-fetch');




async function sandbox(){

const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-2&idEntity=22926%7C%7CSTD&pax=2&room=1", {"credentials":"include","headers":{"accept":"application/json, text/javascript, */*; q=0.01","accept-language":"fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7","x-requested-with":"XMLHttpRequest"},"referrer":"https://www.relaischateaux.com/fr/france/bussiere-cote-d-or-la-bussiere-sur-ouche","referrerPolicy":"origin-when-cross-origin","body":null,"method":"GET","mode":"cors"});


console.log(await response.json());
//var $ = cheerio.load(await response.json());
//console.log($);






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