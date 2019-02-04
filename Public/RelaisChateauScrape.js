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
		
		links.forEach(async function(url) {
  var responses = [];
  request({uri: url}, async function(error, response, body) {
    $ = cheerio.load(body);
 // console.log($.html());
 var isHotel="";
 try {
 isHotel= await  $('.jsSecondNavMain').find("li").find("a").first().text();
}
catch(error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}



if(isHotel.includes('Hôtel')===true )
      {var isRestaurant="";
		  try{
			  
			  isRestaurant = await $('.jsSecondNavMain').find("li").next().find("a").first().text();
		 
		  }catch(error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}
		 
		  if (isRestaurant.includes('Restaurant')===true)
		  {
			 // console.log(isHotel);
			 // console.log(isRestaurant);
			  	//console.log("good")
		//console.log(url)
		valeur =1;
	//	console.log(compteur);
	//(".ajaxPages").find(".tabRestaurant").find
		try{
			
			
						 // console.log($("h3:contains(mainTitle2)").text());

			  console.log($('.ajaxPages').html());
console.log("==========");
			//  console.log($('.headings').find("*[itemprop = 'name']").text());
		 
		  }catch(error) {
  console.error(error);
  console.log("error");
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}


		compteurHR++;
		
		console.log(compteurHR);

			  
		  }
	
	  }else 
	  {
		
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
































