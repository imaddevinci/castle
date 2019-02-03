var request = require("request");
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
const cheerio = require('cheerio');


var i=1;
while(i<35)
{
request(
    { uri: "https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-"+i },
    function(error, response, body) {
      //  console.log(body);
	//  var js= JSON.stringify(body);
	 
	 
	
	  var $ = cheerio.load(body);
	  
	//let map =$('.mainTitle3 fzMedium cGrey noVerticalMargin');
//	console.log(map.html());
var text = $('.poi_card-display-title');
console.log(text.text());
//console.log(text[11].children[0].data);



    }
	
	
);
i++;
}