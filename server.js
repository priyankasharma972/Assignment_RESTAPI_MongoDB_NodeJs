var express = require('express');
var request = require('request-promise');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var bodyParser = require('body-parser');
const { Timestamp } = require('mongodb');
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended : true}));
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION_URL, ()=>console.log('connected to DB!'));

var citySchema = new mongoose.Schema({
    name : String 
}, {timestamps: true}
);

var cityModel = mongoose.model('City', citySchema);
//var covilha = new cityModel({name : 'covilha'});


async function getWeather(cities) {

    var weather_data = [];

    for (var city_obj of cities) {
        var city = city_obj.name;
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`

        var response_body = await request(url);
       
        var weather_json = JSON.parse(response_body);
        

        var weather = {
            city : city,
            temperature : Math.round(weather_json.main.temp),
            timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
        };

        weather_data.push(weather);
    }

    return weather_data;
}

app.get('/currenttempincovilha', function(req, res) {

    cityModel.find({}, function(err, cities) {

        getWeather(cities).then(function(results) {

            var weather_data = {weather_data : results};

            res.send(weather_data);

        });

    });      

});


app.listen(8000);


const slowAndSteady = new Promise(function(resolve, reject) {
    reject();
});
slowAndSteady
    .then(function() {
        console.log('The last shall be the first!');
    })
    .catch(function(err) {
        console.log('error: ', err);
    });