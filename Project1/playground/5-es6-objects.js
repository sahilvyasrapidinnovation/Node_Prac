const name = 'Andrew'
const userAge = 27

const user = {
    name ,
    age: userAge,
    Location: ' Philadelphia'

}

console.log(user)

const product = {
    label : 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating : 4
}

// const {label:productLabel, stock,rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock})=> {
  console.log(type, label, stock)
}

transaction('order', product)