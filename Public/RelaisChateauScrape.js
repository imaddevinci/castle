var request = require("request");
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
const cheerio = require('cheerio');
var http = require('http');   
var sleep = require('thread-sleep');
var nomHotel=[];
var nomRestaurant=[];

async function sandbox(){
  

request(
    { uri: "https://www.relaischateaux.com/fr/site-map/etablissements"},//requete 
     function(error, response, body) {
    
	  var $ = cheerio.load(body);
	  
var links = [];
$('#countryF').find("h3:contains('France')").parent().find('.listDiamond > li').each( function (index, value) {
    links.push($(this).find("a").first()[0].attribs.href);	
	});

	var i =0;
	var compteurHR=0;

		var compteur=0;
		var completed_requests = 0;
		
		links.forEach(async function(url) {
		var responses = [];
  request({uri: url}, async function(error, response, body) {
    $ = cheerio.load(body);
	var isHotel="";
 
	isHotel= await  $('.jsSecondNavMain').find("li").find("a").first().text();



if(isHotel.includes('Hôtel')===true )
      { 
		  
			  
			var  isRestaurant = await $('.jsSecondNavMain').find("li").next().find("a").first().text();
		 
		  if (isRestaurant.includes('Restaurant')===true)
		  {
			 
		valeur =1;	
		//	console.log(compteurHR);
			
//var rest1 =$('.jsSecondNavSub').find("li").first().find("a").text(); var rest2 = null;
//nomRestaurant.push(rest1);
if($('.jsSecondNavSub').find("li").next().find("a").text() != null)
{
	
  //rest2 = $('.jsSecondNavSub').find("li").next().find("a").text();
  nomRestaurant.push($('.jsSecondNavSub').find("li").first().find("a").text(),$('.jsSecondNavSub').find("li").next().find("a").text());
  //console.log(rest2);
}
			  
			/*  sleep(10000);
			  console.log(rest1);*/
			 // console.log($('.headings').find("*[itemprop = 'name']").text());

			 console.log(compteurHR);
	nomHotel.push($('.headings').find("*[itemprop = 'name']").text());


		compteurHR++;
		
		

			  
		  }
	
	  }else 
	  {
		
		 valeur=0;
		
		   // links.splice(compteur,1);
		  
	  }
	  compteur++;
	 // console.log(compteur);
	 
	 
	
	 
      if (compteur ==links.length-1) {
        // All downloads are completed
 //       console.log('body:', responses.join());
  sleep(10000);
	  nomHotel.forEach(function(item, index, array) {
  console.log(item, index);
   });
   nomRestaurant.forEach(function(item, index, array) {
  console.log(item, index);
   });
  
	  }
 
   
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
































