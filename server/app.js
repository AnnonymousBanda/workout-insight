const express = require('express')
const cors = require('cors')
const apiRoutes = require('./routes/api.routes')

const app = express()

app.use(
	cors({
		origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
		optionsSuccessStatus: 200,
	})
)

app.use(express.static('src'))

app.use('/api', apiRoutes)

app.route('/').get((req, res) => {
	return res.sendFile('index.html', { root: 'src' })
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
