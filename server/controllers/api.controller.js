const fs = require('fs')
const path = require('path')
const { catchAsync } = require('./../controllers/error.controller')
const { hasExpired, updateData, getData } = require('../utils/api.utils')

async function exercise(req, res, next) {
	const bodyPartListPath = path.join(
		__dirname,
		'..',
		'data',
		'bodyPartList.json'
	)
	const bodyPartList = await getData(bodyPartListPath)

	const bodyPart = req.params.id
	if (!bodyPartList.includes(bodyPart)) {
		const error = new Error('Invalid API endpoint')
		error.status = 404
		error.name = 'InvalidEndpoint'
		return next(error)
	}

	const dataPath = path.join(__dirname, '..', 'data', `${bodyPart}.json`)
	let data = await getData(dataPath)

	const [{ gifUrl }] = data
	if (await hasExpired(gifUrl)) {
		console.log('Data has expired')
		await updateData(bodyPart)
		console.log('Data has been updated')
		data = await getData(dataPath)
		console.log('Data has been retrieved')
	}

	return res.json(data)
}

async function bodyPartList(req, res, next) {
	const bodyPartListPath = path.join(
		__dirname,
		'..',
		'data',
		'bodyPartList.json'
	)

	const bodyPartList = JSON.parse(fs.readFileSync(bodyPartListPath, 'utf8'))

	return res.json(bodyPartList)
}

module.exports = {
	exercise,
	bodyPartList,
}
