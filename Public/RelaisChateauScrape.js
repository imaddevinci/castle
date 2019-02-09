var request = require("request");
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
const cheerio = require('cheerio');
var http = require('http');   
var sleep = require('thread-sleep');
const fetch = require('node-fetch');
var nomRestaurant=[];
var tab = new Object();





function sandbox(){
	

	 
	 
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
		
		links.forEach(function(url) {
	request({uri: url}, function(error, response, body) {
    $ = cheerio.load(body);
	var isHotel="";
 
	isHotel= $('.jsSecondNavMain').find("li").find("a").first().text();
	var compteurTab=0;


if(isHotel.includes('Hôtel')===true )
      { 
		  
			  
			var  isRestaurant = $('.jsSecondNavMain').find("li").next().find("a").first().text();
		 
		  if (isRestaurant.includes('Restaurant')===true)
		  {
			 
		valeur =1;	

		var rest1 = null, rest2 = null; var hotel=null; var price = null;
		if($('.jsSecondNavSub').find("li").first().find("a").text() != '')
	{
	rest1 =$('.jsSecondNavSub').find("li").first().find("a").text().trim();
		  if($('.jsSecondNavSub').find("li").next().find("a").text() != '')
		  {
			rest2 = $('.jsSecondNavSub').find("li").next().find("a").text().trim();
		  }
		}
		else
		{
		  rest1 = $('.hotelTabsHeaderTitle').find("h3").text().trim();
	
		 
		}


			//nomRestaurant.push(rest2);
			//price(url);
		
			
			 console.log(compteurHR);
			 price =$('.innerHotelHeader').find('.priceTag').find('.tag.tagTall.tagLight').find('.price').text()
			 hotel=$('.headings').find("*[itemprop = 'name']").text().trim();
			 
			 
			 tab[hotel]=rest1;
		//	 nomHotel[0].push(hotel);
		//	 nomHotel[1].push(rest1);
		 //    nomHotel[2].push(price);
			 compteurHR++;
		  }
	
	  }else 
	  {
		
		 valeur=0;
		
		   // links.splice(compteur,1);
		  
	  }
	  compteur++;
	 // console.log($('#etablissement-room-list').html());
	 
	 
	
	 
      if (compteur ==links.length-1) {
       
 // sleep(10000);
	// nomHotel.forEach(function(item, index, array) {
	// console.log(item, index);
	//});

// for(var i in tab)
// {
     // console.log(i + "=" + tab[i]);
// }

	// nomRestaurant.forEach(function(item, index, array) {
	 // console.log(item, index);
	 // });
  exports.sejour =tab;
	  }
 
   
});

})


     }
	 
	 
	
);





	}
sandbox();


//recuperer le prix et les jours reservés, avec la requete
// async function price(links)
// {
	
	// request(
    // { uri: links },
    // function(error, response, body) {

	 
	 
	
	  // var $ = cheerio.load(body);
	  

		
 // var id = $('.ajaxPages').find('#tabProperty').attr('data-gtm-datalayer').('synxis_id'); //il faut recuperer l'attribut synxis_id du tableau data-gtm-dataplayer pr le mettre dans la requete
	// console.log(id);

    // }
// );


	//il faut remplacer l'id dans la requete(dans le lien) par celle trouvé au dessus 
	 // const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-3&idEntity=22684%7C%7CSTD1DG&pax=2&room=1", {"credentials":"include","headers":{"accept":"application/json, text/javascript, */*; q=0.01","accept-language":"fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7","x-requested-with":"XMLHttpRequest"},"referrer":"https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor","referrerPolicy":"origin-when-cross-origin","body":null,"method":"GET","mode":"cors"});

	 // console.log(await response.json());
	
// }
































