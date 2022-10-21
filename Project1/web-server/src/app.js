const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')


const app = express()


//Define path for express config
console.log(path.join(__dirname, '../public'))
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


// Setup handlebars engine and views  location
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve 
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req,res)=> {
    res.render('index',{
        title : 'Weather',
        name:'Andrew mead'
    })
})


app.get('/about',(req,res)=> {
   res.render('about',{
    title:'About!',
    name: ' Andrew'
   })
})


app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help',
        helpText:'This is my message'
    })
})


app.get('/weather',(req,res)=>{
    // if(!req.query.address)
    // {
    //     res.send({error:'Please provide address'})
    // }
    console.log(req.query.lat)

    forecast(req.query.lat,req.query.long, (error,forecastdata)=>{
        if(error) {
            return res.send(error)
        }
        res.send({
            forecast: forecastdata
        })


    })




    // res.send({
    //     location:'Philadelphia',
    //     forecast:'Humid',
    //     address: req.query.address
    // })
})

app.get('/products',(req,res)=>{

    if(!req.query.search){
       return  res.send('error: You must provide a search term')
    }
    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('/help/*',(req,res)=>{
          res.render('error',{
            mytitle:'404',
            errorTitle:'Article not found'
          })
})

app.get('*',(req,res)=>{
      res.render('error',{
        title:'404',
        errorTitle:'My error 404'
      })
})



app.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})