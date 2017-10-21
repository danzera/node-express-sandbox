// BASE MODULES
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const bodyParserJson = require('body-parser-json')

// AUTHENTICATION MODULES
// -- would go here --

// ROUTE MODULES
const index = require('./routes/index')

// APP CONFIGURATION
app.set('port', (process.env.PORT || 6789))

// MIDDLEWARE CONFIGURATION
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve('server/public')));

// ROUTES
app.use('/*', index)

// LISTEN
app.listen(app.get('port'), () => {
	console.log('listening on port', app.get('port'))
})