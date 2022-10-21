const fs= require('fs')
// const book = {
//     title:'Ego is the enemy',
//     author:'Ryan Holiday'
// }

// const bookJSON=JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const JSONData= dataBuffer.toString();
const data = JSON.parse(JSONData);
data.name='Sahil'
data.age='22'
const dataJson = JSON.stringify(data)
fs.writeFileSync('1-json.json',dataJson)
console.log(data)
