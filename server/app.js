const express = require('express')
const cors = require('cors')
const path = require('path')
const apiRoutes = require('./routes/api.routes')
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')

require('dotenv').config()

const app = express()

const corsOptions = {
	origin: process.env.CORS_ORIGIN,
	optionsSuccessStatus: 200,
}
const limiterOptions = {
	windowMs: 10 * 60 * 1000,
	max: 100,
	message: 'Too many requests from this IP, please try again later.',
}

app.use(rateLimit(limiterOptions))
app.use(cors(corsOptions))
app.use(morgan('dev'))

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
