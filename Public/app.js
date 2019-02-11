var request = require("request");
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
const cheerio = require('cheerio');
const michelin = require('./Michelin');
const relaisChateau = require('./RelaisChateauScrape');
//var start = new Array().concat(michelin.start); //copie des restaurants etoile
var tab = relaisChateau.tab;
//var start=michelin.start;
//var resto= relaisChateau.resto;


//import relaisChateau.tab from './RelaisChateauScrape.js';
//var tab1 =Object.assign(tab, relaisChateau.sejour());

//console.log(resto); //restaurants etoilé
// var size = Object.keys(tab).length;
 // console.log(size);
 // console.log(start.length);
for(var i in tab)
{
	
     console.log(i);
}

// var tab = {"a": "truc", "b": "machin", "c": "bidule"};

// delete(tab.b);


