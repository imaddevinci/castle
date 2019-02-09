var request = require("request");
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
const cheerio = require('cheerio');
const michelin = require('./Michelin');


console.log(michelin.start);