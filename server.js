const bodyParser = require('body-parser')
const express = require('express')
const app = express()


app.use(bodyParser.urlencoded({ extended: true}))

app.post('/dados', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>ola ! </h1>')
})

app.listen(2003)