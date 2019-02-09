var request = require("request");
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
const cheerio = require('cheerio');


var i=1;

request(
    { uri: "http://jes.ecsdl.org/content/164/1/A5019.abstract"},
    function(error, response, body) {
      //  console.log(body);
	//  var js= JSON.stringify(body);
	 
	 
	console.log(body);
	  var $ = cheerio.load(body);
	  
	//let map =$('.mainTitle3 fzMedium cGrey noVerticalMargin');
//	console.log(map.html());
//var text = $('.poi_card-display-title');

//console.log(text[11].children[0].data);



    }
	
	
);
