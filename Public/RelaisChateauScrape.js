var request = require("request-promise");
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
const cheerio = require('cheerio');
var http = require('http');   
//var sleep = require('thread-sleep');
const fetch = require('node-fetch');
var nomRestaurant=[];
var tab = new Object();
const michelin = require('./Michelin');
//var start = new Array().concat(michelin.start); //copie des restaurants etoile
var start=michelin.start;




//recuperer le prix et les jours reservés, avec la requete
/*async function price(url)
{
	var id="";
	await request(url,(error, response, body) =>
	{
	var $ = cheerio.load(body);	  	
	var id = $('.ajaxPages').find('#tabProperty').attr('data-gtm-datalayer'); //il faut recuperer l'attribut synxis_id du tableau data-gtm-dataplayer pr le mettre dans la requete
	//console.log(id);
	var index = id.indexOf("synxis_id");
	var indexComma = id.indexOf(",", index + 11 );
	id = id.substring(index + 11, indexComma);	
	console.log(id);
	
    });*/

	// return id;
	//il faut remplacer l'id dans la requete(dans le lien) par celle trouvé au dessus 
	 // const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-3&idEntity=22684%7C%7CSTD1DG&pax=2&room=1", {"credentials":"include","headers":{"accept":"application/json, text/javascript, */*; q=0.01","accept-language":"fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7","x-requested-with":"XMLHttpRequest"},"referrer":"https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor","referrerPolicy":"origin-when-cross-origin","body":null,"method":"GET","mode":"cors"});

	 // console.log(await response.json());
// }



	async function sandbox(){
		
	var urls = [];
	await request('https://www.relaischateaux.com/fr/site-map/etablissements',(error, response, html)=> {
    
		var $ = cheerio.load(html);
	  
		
		$('#countryF').find("h3:contains('France')").parent().find('.listDiamond > li').each( function (index, value) {
			urls.push($(this).find("a").first()[0].attribs.href);	
			});
	});
	return urls;
		
	}
		
		
	async function func()
		{
		var i =0;
		var compteurHR=0;
		var pric="";
		var compteur=0;
		var urls = await sandbox();
		console.log(urls.length);
		 for (const url of urls)
		{  
	
			await request(url,(error, response, body)=> {
		
			const $ = cheerio.load(body);
			var isHotel="";
			
			isHotel= $('.jsSecondNavMain').find("li").find("a").first().text(); //nom hotel
		
			if(isHotel.includes('Hôtel')===true )
			{ 
			var  isRestaurant = $('.jsSecondNavMain').find("li").next().find("a").first().text(); // nom restos
		 
			if (isRestaurant.includes('Restaurant')===true) 
			{
		

				var rest1 = null; rest2 = null; var hotel=null; var price = null;
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

		
			
				
				
				
					//comparer michelin
			console.log("resto 1 =  "+rest1);
			if (rest2!=null){
			console.log("resto 2 =  "+rest2);
			}
			var restau1 = false;
			var restau2=false;
			for (var j = 0; j < start.length; j++) 
			{
				

			if(start[j].includes(rest1)===true )
			{
				console.log("aaaaaaaaaaaaaa");
				restau1=true;
				//console.log(start[j]);
				break;
			}
			if(rest2!=null && start[j].includes(rest2)===true)
			{
				console.log("bbbbbbbbbb");
				restau2=true;
				break;
			}
			
			}
			if (restau1==true &&restau2==true)
			{
				console.log("2 etoiles");
				console.log(compteurHR);
				hotel=$('.headings').find("*[itemprop = 'name']").text().trim();
				tab[hotel]=rest1 + "          " + rest2;
				compteurHR++;
			}else if(restau1==true && restau2==false)
			{
				
				console.log("1 etoile");
				hotel=$('.headings').find("*[itemprop = 'name']").text().trim();
				tab[hotel]=rest1;
			
				
			}else if(restau1==false && restau2==true)
			{
				
				console.log("1 etoile");
				hotel=$('.headings').find("*[itemprop = 'name']").text().trim();
				tab[hotel]=rest2;
			
				
			}
	
			var id = $('.ajaxPages').find('#tabProperty').attr('data-gtm-datalayer'); //il faut recuperer l'attribut synxis_id du tableau data-gtm-dataplayer pr le mettre dans la requete
			var index = id.indexOf("synxis_id");
			if(index != 0){
			var indexComma = id.indexOf(",", index + 11 );
			id = id.substring(index + 11, indexComma);
			}
			else{
				id = 'noSynId';// ou 0 comme tu veux}		
				
				}
				console.log(id);
				//price = $('.innerHotelHeader').find('.priceTag').find('.tag.tagTall.tagLight').find('.price').text();
				//pric =await price(url);
				
				 			
							
							
							
							
		
							
							
							
							
						}
					}
				//	console.log(compteur);
				  compteur++;
				 if (compteur ===149) 
				  {
					 for(var i in tab)
					{
						console.log(i + "=" + tab[i]);
   				    }
					
				  }
				 
				   
				});

				}
					}

// exports.tab = tab;

  func();







/*



async function strated(rest1)
{		
			var etoil=false;
			console.log("resto 1 =  "+rest1);

			for (var j = 0; j < start.length; j++) 
			{
				

			if(start[j].includes(rest1)===true)
			{
				console.log("aaaaaaaaaaaaaa");
				etoil=true;
				//console.log(start[j]);
				break;
			}
			}
	
		return etoil;
	
}*/





















