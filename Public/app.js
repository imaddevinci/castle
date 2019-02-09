var request = require("request");
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
const cheerio = require('cheerio');
const michelin = require('./Michelin');
const relaisChateau = require('./RelaisChateauScrape');
var start = new Array().concat(michelin.start); //copie des restaurants etoile
var tab = new Object();
var tab1 =Object.assign(tab, relaisChateau.sejour);

//console.log(michelin.start); //restaurants etoilé
// console.log(relaisChateau.sejour);
for(var i in tab1)
{
     console.log(i + "=" + tab1[i]);
}