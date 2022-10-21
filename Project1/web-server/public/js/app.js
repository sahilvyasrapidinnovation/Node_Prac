console.log('Client side javascript file is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response)=> {
//     response.json().then((data) => {
//         console.log(data)
//     })
//})

// fetch('http://localhost:3000/weather?lat=19.4559&long=72.7763').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }
//         else {
//            // console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherForm = document.querySelector('form') 
const lat = document.getElementById('lat')
const long = document.getElementById('long')

const messageOne= document.querySelector('#message-1')

const messageTwo= document.querySelector('#message-2')




weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent= 'Loading...'
    messageTwo.textContent= ''

    fetch('http://localhost:3000/weather?lat='+lat.value+'&long='+long.value).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageTwo.textContent = data.error
        }
        else {
           // console.log(data.location)
         messageOne.textContent = data.forecast
        }
    })
})
    console.log('testing!')
    console.log(lat.value)
})