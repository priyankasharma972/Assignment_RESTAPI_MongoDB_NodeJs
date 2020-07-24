## This is a Weather App.
It is RESTful Webservice and is created with Node.js and MongoDB Atlas as the database.

## Please install below in order to test the application:
npm install 
n
npm start
npm install mongodb

## Below is the end points that can be tested with Curl and Postman:
1. http://localhost:8000/currenttempincovilha

## GET /currenttempincovilha
This end point will return the current temprature for Covilha, Portugal with city name, temprature and the timestamp of the reading
# Sample:
{"weather_data":[{"city":"covilha","temperature":19,"timestamp":"2020-07-24 08:03:38"}]}


## Author
Priyanka Sharma authored this weather api project