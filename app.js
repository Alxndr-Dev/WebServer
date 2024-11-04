const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo')
})

app.get('*', (req, res) => {
    res.send('404 | Page not found')
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})