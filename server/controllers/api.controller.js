const fs = require('fs')
const path = require('path')

async function exercise(req, res, next) {
	const bodyPartListPath = path.join(
		__dirname,
		'..',
		'data',
		'bodyPartList.json'
	)

	const bodyPartList = JSON.parse(fs.readFileSync(bodyPartListPath, 'utf8'))

	const bodyPart = req.params.id

	if (!bodyPartList.includes(bodyPart)) {
		const error = new Error('Invalid API endpoint')
		error.status = 404
		error.name = 'InvalidEndpoint'
		return next(error)
	}

	const dataPath = path.join(__dirname, '..', 'data', `${bodyPart}.json`)

	const exercises = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

	return res.json(exercises)
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
