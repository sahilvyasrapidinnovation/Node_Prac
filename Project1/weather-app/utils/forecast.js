const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=937b3eb85d19f5fb304ef5cec5c3220a&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=f' ;
     
    request({url , json: true}, (error,{body}) => {
        if(error){
            callback('Unable to access data',undefined)
        }
        else if(body.error){
            callback('Unable to find this location', undefined)
        }
        else {
            callback(undefined,'We are in '+ body.location.region + ' region. '+body.current.weather_descriptions[0]+' It is currently '+ body.current.temperature+' ferenheight out. There is a '+ body.current.precip+'% chance Of rain.')
        }
     }) 
     
}

module.exports = forecast