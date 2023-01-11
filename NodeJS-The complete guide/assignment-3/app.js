const express = require('express')
const routes = require('./routes/index')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'public')))
app.use(routes)

app.listen(3000)