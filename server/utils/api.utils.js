const fs = require('fs')
async function hasExpired(url) {
	const option = {
		method: 'HEAD',
	}

	const response = await fetch(url, option)

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

	fs.writeFileSync(
		`./${bodyPart}.json`,
		JSON.stringify(await response.json(), null, 4)
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
