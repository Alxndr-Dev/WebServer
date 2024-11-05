const express = require('express')
const app = express()
const port = 8080

// Middleware
// Content static serve

app.use( express.static('public'))


app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})