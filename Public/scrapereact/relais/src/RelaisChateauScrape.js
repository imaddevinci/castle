'use strict';
var request = require("request-promise");
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
const cheerio = require('cheerio');
var http = require('http');
const fetch = require('node-fetch');
var nomRestaurant = [];
var tab = new Object();
const michelin = require('./Michelin');
var start = michelin.start;
var priceAvailable = new Object();
var React = require('react');
var tester = [];
var cout = [];
var obje = new Object();




//recuperer le prix et les jours reservés, avec la requete
async function Price(url, id, mois) {
    var cost = new Object();
    var today = new Date();
    var samdiOccupe = new Object();

    //il faut remplacer l'id dans la requete(dans le lien) par celle trouvé au dessus 
    const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-" + mois + "&idEntity=" + id + "&pax=2&room=1", {
        "credentials": "include",
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": url,
        "referrerPolicy": "origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors"
    });


    var body = await response.json();

    for (var i = 1; i < 32; i++) {

        var week_end = new Date('2019-' + mois + '-' + i);


        if (week_end.getDay() == 6) {


            if (body['2019-' + mois].pricesPerDay[i] != undefined && body['2019-' + mois].pricesPerDay[i] != null && body['2019-' + mois].pricesPerDay != null) {


                cost["saturday " + i] = body['2019-' + mois].pricesPerDay[i];

            } else {

                samdiOccupe["saturday " + i] = "all ready booked";
                cost["saturday " + i] = "already booked";

            }
        }

    }

    var tailleObjet = Object.keys(cost).length; //taille objet
    if (tailleObjet != 0) {

        var voo = {
            mois: mois,
            prix: cost
        };
        //coout.push(voo);
        return voo;
    } else {


        return {
            mois: 0,
            prix: samdiOccupe
        };
    }




}


//genere un tableau d'url

async function tabUrl() {

    var urls = [];
    await request('https://www.relaischateaux.com/fr/site-map/etablissements', (error, response, html) => {

        var $ = cheerio.load(html);


        $('#countryF').find("h3:contains('France')").parent().find('.listDiamond > li').each(function(index, value) {
            urls.push($(this).find("a").first()[0].attribs.href);
        });
    });
    return urls;

}



async function func() {
    var i = 0;
    var today = new Date();
    var compteurHR = 0;
    var pric = "";
    var compteur = 0;
    var urls = await tabUrl();
    console.log(urls.length);
    for (const url of urls) {

        await request(url, (error, response, body) => {

            const $ = cheerio.load(body);
            var isHotel = "";

            isHotel = $('.jsSecondNavMain').find("li").find("a").first().text(); //nom hotel

            if (isHotel.includes('Hôtel') === true) {
                var isRestaurant = $('.jsSecondNavMain').find("li").next().find("a").first().text(); // nom restos

                if (isRestaurant.includes('Restaurant') === true) {


                    var rest1 = null;
                    var rest2 = null;
                    var hotel = null;
                    var price = null;
                    if ($('.jsSecondNavSub').find("li").first().find("a").text() != '') {
                        rest1 = $('.jsSecondNavSub').find("li").first().find("a").text().trim();
                        if ($('.jsSecondNavSub').find("li").next().find("a").text() != '') {
                            rest2 = $('.jsSecondNavSub').find("li").next().find("a").text().trim();
                        }
                    } else {
                        rest1 = $('.hotelTabsHeaderTitle').find("h3").text().trim();


                    }

                    //comparer michelin
                    console.log("resto 1 =  " + rest1);
                    if (rest2 != null) {
                        console.log("resto 2 =  " + rest2);
                    }
                    var restau1 = false;
                    var restau2 = false;
                    for (var j = 0; j < start.length; j++) {


                        if (start[j].includes(rest1) === true) {

                            restau1 = true;

                            break;
                        }
                        if (rest2 != null && start[j].includes(rest2) === true) {

                            restau2 = true;
                            break;
                        }

                    }
                    hotel = $('.headings').find("*[itemprop = 'name']").text().trim();
                    if (restau1 == true || restau2 == true) {

                        var id = $('.ajaxPages').find('#tabProperty').attr('data-gtm-datalayer'); //il faut recuperer l'attribut synxis_id du tableau data-gtm-dataplayer pr le mettre dans la requete
                        var index = id.indexOf("synxis_id");
                        if (index != -1) {
                            var indexComma = id.indexOf(",", index + 11);
                            id = id.substring(index + 11, indexComma);
                        } else {
                            id = 'noSynId'; // ou 0 comme tu veux}		

                        }
                        console.log(id);

                        if (id != 'noSynId') {
                            (async () => {
                                console.log(hotel);

                                (async () => {

                                    var coout = [];
                                    for (let i = 2; i < 13; i++) {

                                        coout.push(await Price(url, id, i));

                                    }

                                    var tailleObjet = Object.keys(coout).length; //taille objet
                                    if (tailleObjet != 0) {
                                        var obj = {
                                            name: hotel,
                                            restaurant1: rest1,
                                            restaurant2: rest2,
                                            date: coout
                                        };
                                        tester.push(obj);

                                        fs.writeFile('hotel.json', JSON.stringify(tester, null, 4), function(err){
                                        console.log('File successfully written! - Check your project directory for the output.json file');
                                        if (err) console.log(err);
                                        });


                                    }
                                })();




                            })();

                        }
                    }
                }
            }
            console.log(compteur);
            compteur++;

            //si tous les sites ont été parcourus
            if (compteur === 150) {
                //tri par insertion
                for (var i = 0; i < Object.keys(tester).length - 1; i++) {

                    for (var j = i + 1; j < Object.keys(tester).length; j++) {

                        if (tester[j]['date'][1]['mois'] != 0 && tester[j]['date'][1]['mois'] != 0)


                        {
                            if (tester[j]['date'][1]['prix']['saturday 9'] < tester[i]['date'][1]['prix']['saturday 9']) {
                                var temp = tester[j];
                                tester[j] = tester[i];
                                tester[i] = temp;


                            }
                        }
                    }
                }


                (async () => {

                    fs.writeFile('tri.json', JSON.stringify(tester, null, 4), function(err){
                    console.log('File successfully written! - Check your project directory for the output.json file');
                    if (err) console.log(err);
                    });

                })();


            }


        });

    }
}




func();