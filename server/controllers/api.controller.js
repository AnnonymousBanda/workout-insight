const fs = require('fs')
const path = require('path')
const { hasExpired, updateData, getData } = require('../utils/api.utils')

const exercisesURL =
	'https://exercisedb.p.rapidapi.com/exercises?limit=30&offset=0'
const exercisePath = path.join(__dirname, '..', 'data', 'exercises.json')
let exercises = getData(exercisePath)

const bodyPartList = [
	'back',
	'cardio',
	'chest',
	'lower arms',
	'lower legs',
	'neck',
	'shoulders',
	'upper arms',
	'upper legs',
	'waist',
]

async function exerciseByID(req, res, next) {
	const { id } = req.query
	if (!id) {
		const error = new Error('Invalid API endpoint')
		error.status = 404
		error.name = 'InvalidEndpoint'
		return next(error)
	}
	const fetchedData = exercises.find((exercise) => exercise.id === id)
	if (!fetchedData) {
		const error = new Error('Exercise not found')
		error.status = 404
		error.name = 'ExerciseNotFound'
		return next(error)
	}
	return res.json(fetchedData)
}

async function exerciseByBodyPart(req, res, next) {
	const bodyPart = req.params.id
	if (!bodyPartList.includes(bodyPart) && bodyPart !== 'all') {
		const error = new Error('Invalid API endpoint')
		error.status = 404
		error.name = 'InvalidEndpoint'
		return next(error)
	}

	const [{ gifUrl }] = exercises
	if (await hasExpired(gifUrl)) {
		console.log('Data has expired')
		await updateData(exercisesURL, exercisePath)
		console.log('Data has been updated')
		exercises = getData(exercisePath)
		console.log('Data has been retrieved')
	}

	if (bodyPart === 'all') {
		return res.json(exercises)
	}

	return res.json(
		exercises.filter((exercise) => exercise.bodyPart === bodyPart)
	)
}

function bodyPart(req, res, next) {
	return res.json(bodyPartList)
}

module.exports = {
	exerciseByID,
	exerciseByBodyPart,
	bodyPart,
}
