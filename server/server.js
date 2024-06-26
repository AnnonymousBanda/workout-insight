const httpServer = require('http')
const app = require('./app')

require('dotenv').config()

const server = httpServer.createServer(app)

const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
	console.log(`The server is running at http://localhost:${PORT}`)
})
