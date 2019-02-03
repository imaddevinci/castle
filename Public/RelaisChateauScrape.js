var request = require("request");
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
const cheerio = require('cheerio');
var http = require('http');   
var nomHotel=[];
var nomRestaurant=[];
async function sandbox(){
  

request(
    { uri: "https://www.relaischateaux.com/fr/site-map/etablissements"},
    function(error, response, body) {
      //  console.log(body);
	//  var js= JSON.stringify(body);
	 
	 
	
	  var $ = cheerio.load(body);
	  
	  //console.log($('#countryF').find("h3:contains('France')").parent().find('.listDiamond > li ').text());
	  
var links = [];
$('#countryF').find("h3:contains('France')").parent().find('.listDiamond > li').each( function (index, value) {
   // var link = $(value).attr('href');
    links.push($(this).find("a").first()[0].attribs.href);
	//console.log(links);
	
	
	
	
	
	});
	
	
	//console.log(links);
	var i =0;
var compteurHR=0;

		var compteur=0;
		var completed_requests = 0;
		
		links.forEach(function(url) {
  var responses = [];
  request({uri: url}, function(error, response, body) {
    $ = cheerio.load(body);
 // console.log($.html());
var isHotel =$('.jsSecondNavMain').find("a").first().text();
var isRestaurant= $('.jsSecondNavMain').find("li").next().find("a").first().text();
if(isHotel.includes('Hôtel')===true && isRestaurant.includes('Restaurant')===true)
      {
		//console.log("good")
		//console.log(url)
		valeur =1;
		

//var hotel=$('.jsSecondNavMain').next().find("a").attr('href');
	//	var hotel=$('.jsSecondNavMain').next().find("a").attr('href');
	//	console.log(hotel);
	//	console.log($('.grid.row.hotelTabsHeader.col-1-1.hotelTabsHeaderTitle').find("*[itemprop = 'name']").text);
	//	console.log($('.jsSecondNavMain').next().find("a").attr('href'));
		
		
	//  nomHotel[compteurHR] =hotel;
	  //nomRestaurant[compteurHR]=restaurant;
		//compteurHR++;
	  }else 
	  {
		//  console.log("bad")
		 // console.log(url)
		 valeur=0;
		
		    links.splice(compteur,1);
		  
	  }
	  compteur++;
	 // console.log(compteur);
      if (completed_requests++ == links.length - 1) {
        // All downloads are completed
 //       console.log('body:', responses.join());
      }
	  
//console.log(links);
//console.log(links.length);      
  //  console.log(nomHotel);
  //console.log(nomRestaurant);
  });
  

})

 













     }
	 
	 
	
);





	}


/*

function retourTableau(tab){
	var i=0;
while (i<tab.length)
{
request(
    { uri: tab[i]},
    function(error, response, body) {
     
	
	 // console.log(body);
	  $=cheerio.load(body);
	  	 // console.log($('.jsSecondNavMain').find("li").next().find("a").first().text());
		 
var isHotel =$('.jsSecondNavMain').find("a").first().text();
var isRestaurant= $('.jsSecondNavMain').find("li").next().find("a").first().text()
//	console.log(isHotel);
	//console.log(isRestaurant);
if (isHotel==null || isRestaurant==null)
{
	tab.splice(i,1);
	

}
	//  console.log($('.jsSecondNavMain').next().find("a").attr('href'));

		     }
	
);
i++;
}
console.log(tab.length);
return tab;
}






*/




sandbox();
































