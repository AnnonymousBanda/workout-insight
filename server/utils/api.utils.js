const fs = require('fs')

async function hasExpired(url) {
	const option = {
		method: 'HEAD',
	}

	let response = await fetch(url, option)

	return Number.parseInt(response.status) !== 200
}

async function updateData(url, path) {
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': process.env.API_KEY,
			'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
		},
	}

	response = await fetch(url, options)
	response = await response.json()

	fs.writeFileSync(path, JSON.stringify(response, null, 4))
}

function getData(path) {
	const data = JSON.parse(fs.readFileSync(path, 'utf8'))

	return data
}

module.exports = {
	hasExpired,
	updateData,
	getData,
}
