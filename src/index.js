
var uniquieRandomeArray = require('unique-random-array');
var MovieNames=require('./movie-list.json');

module.exports=
{
all:MovieNames,
random:uniquieRandomeArray(MovieNames)
}