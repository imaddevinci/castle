var request = require("request");
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
const cheerio = require('cheerio');
var start = [];


 function mic()
{
var i=1;
while(i<35)
{
request(
    { uri: "https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-"+i },
    function(error, response, body) {
	  var $ = cheerio.load(body);
	  

		var etoile = $('.poi_card-display-title');
		start.push(etoile.text());
		//console.log(etoile.text());
	}
);
i++;
}
exports.start =start;
}

mic();