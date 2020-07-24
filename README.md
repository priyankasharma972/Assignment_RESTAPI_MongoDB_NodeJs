## This is a Weather App.
It is RESTful Webservice and is created with Node.js and MongoDB Atlas as the database.
This project uses https://openweathermap.org/api as the Weather API

## Installation Steps:
npm install request-promise
npm start

## Pre-requisites:
1. Get an API KEY from https://openweathermap.org/api
2. Add the API Details and MongoDB Credentials to an .env file(see attached `.envsample` file for reference)
3. Please uncomment the line number 20 in `server.js` in order to add the city entry in the database. You can comment this line later in the 2nd run.


## Below is the end points that can be tested with Curl and Postman:
1. http://localhost:8000/currenttempincovilha

## GET /currenttempincovilha
This end point will return the current temprature for Covilha, Portugal with city name, temprature and the timestamp of the reading
# Sample:
{"weather_data":[{"city":"covilha","temperature":19,"timestamp":"2020-07-24 08:03:38"}]}


## Author
Priyanka Sharma authored this weather api project