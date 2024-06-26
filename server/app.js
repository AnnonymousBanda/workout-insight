const express = require('express')
const cors = require('cors')
const path = require('path')
const apiRoutes = require('./routes/api.routes')

require('dotenv').config()

const app = express()

app.use(
	cors({
		origin: process.env.CORS_ORIGIN || 'http://localhost:8000',
		optionsSuccessStatus: 200,
	})
)

app.use(express.static(path.join(__dirname, 'src')))

app.use('/api/exercise', apiRoutes)

app.route('/*').get((req, res) => {
	return res.sendFile('index.html', { root: path.join(__dirname, 'src') })
})

app.use('*', (req, res) => {
	return res.status(404).json({ status: 404, message: 'Route Not Found' })
})

app.use((err, req, res, next) => {
	console.error(err.stack)

	return res.status(500).json({
		status: err.status || 500,
		name: err.name,
		message: err.message || 'Internal Server Error',
		origin: err.stack,
	})
})

module.exports = app
