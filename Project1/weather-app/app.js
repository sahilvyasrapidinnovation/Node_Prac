const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const request = require("request")

// My google API key AIzaSyBepl3vzY7BgMABITU19l8Scgxg811MI1o

// const url = 'http://api.weatherstack.com/current?access_key=937b3eb85d19f5fb304ef5cec5c3220a&query=37.8267,-122.4233&units=f'

// request({url: url, json: true}, (error, response)=> {
//    //console.log(response.body.current)
//    if(error){
//       console.log('Enable to connect')
//    }
//    else if(response.body.error){
//       console.log('Enable to find location')
//    }
//    else
//    console.log(response.body.current.weather_descriptions[0]+' It is currently '+ response.body.current.temperature+' ferenheight out. There is a '+ response.body.current.precip+'% chance Of rain.')
// })


geocode('48.8267','-122.4233', (error,data) => {
   console.log('Error', error)
   console.log('Data', data)
})

forecast('-71.0596','42.3605',(error,data) => {
   console.log('Error',error);
   console.log('Data', data)
})