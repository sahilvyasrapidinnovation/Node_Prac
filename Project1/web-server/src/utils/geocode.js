const request = require('request')

const geocode = (lat,long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=937b3eb85d19f5fb304ef5cec5c3220a&query='+encodeURIComponent(lat)+','+encodeURIComponent(long)+'&units=f'
   
    request({url:url , json: true}, (error,response)=> {
     if(error){
        callback('Unable to connect to location services',undefined)
     }
     else if(response.body.error){
        callback('Unable to find location',undefined)
     }
     else {
        callback(undefined, {
           location: response.body.location.region
        })
     }
  
    })
  }
  
 
  module.exports = geocode