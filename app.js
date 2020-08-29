var express = require('express')
var bodyParser = require('body-parser')

// App
var app = express()
var server = require('http').createServer(app)

// Routes
var routes              = require('./routes/routes')

// Other
var helpers = require("./controllers/helpers.js")

// Error Handling
process.on('uncaughtException', function(err) {
    console.error(err)
    process.exit(1)
})

app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('views', 'public/views/pages')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/', routes)

// Error Handling
app.all('*', helpers.pageNotFound)


server.listen(80, function() {
    console.log("Starting Server")
})
