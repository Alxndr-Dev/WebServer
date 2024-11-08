//Imports:
const express = require('express')
const hbs = require('hbs');

//App express
const app = express()
//PORT
const port = 8080



// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

// Middleware
// Content static serve

//We can use the express.static middleware to serve static files, such as images, CSS, JavaScript, etc.
//We use the folder public to serve the static files.
//This means that the files in the public folder can be accessed by the client.
//This Middleware has to be placed before the routes. Because this has priority over the routes.
app.use( express.static('public'))

// ROUTES
app.get('/', (req, res)=>{
    res.render('home', {
        nombre: 'Alex',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res)=>{
    res.render('generic', {
        nombre: 'Alex',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res)=>{
    res.render('elements', {
        nombre: 'Alex',
        titulo: 'Curso de Node'
    })
})

// This route is for the 404 page
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

// Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})