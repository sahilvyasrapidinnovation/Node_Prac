const request = require('request')

const forecast = (cityName,callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+encodeURIComponent(cityName)+'&appid=f065da70c4fc77e3d9990c92652dca79&units=metric'
     
    request({url , json: true}, (error,{body}) => {
        if(error){
            callback('Unable to access data',undefined)
        }
        else if(body.error){
            callback('Unable to find this location', undefined)
        }
        else {
            callback(undefined,'We are in '+ body.name + ' region. "Weather" :  '+ body.weather[0].description+"\n"+'.  It is currently '+ body.main.temp+' celsius out there')
        }
     }) 
     
}

module.exports = forecast