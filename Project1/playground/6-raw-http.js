const http = require('http')

 const url = 'http://api.weatherstack.com/current?access_key=937b3eb85d19f5fb304ef5cec5c3220a&query=45,-75&units=f';

 const request = http.request(url, (response) => {

    let data = ''
    response.on('data', (chunk)=> {
        // console.log(chunk)
         data = data + chunk.toString()
    })
    response.on('end',()=>{
       const body = JSON.parse(data)
       console.log(body)
    })
 })

 request.on('error', (error)=> {
    console.log('An error',error)
 })


 request.end()