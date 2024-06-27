const fs = require('fs')
const path = require('path')

async function hasExpired(url) {
	const option = {
		method: 'HEAD',
	}

	let response = await fetch(url, option)

	return Number.parseInt(response.status) !== 200
}

async function updateData(bodyPart) {
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': process.env.API_KEY,
			'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
		},
	}

	const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=10&offset=0`
	response = await fetch(url, options)
	response = await response.json()

	fs.writeFileSync(
		path.join(__dirname, '..', 'data', `${bodyPart}.json`),
		JSON.stringify(response, null, 4)
	)
}

async function getData(path) {
	const data = JSON.parse(fs.readFileSync(path, 'utf8'))

	return data
}

module.exports = {
	hasExpired,
	updateData,
	getData,
}
