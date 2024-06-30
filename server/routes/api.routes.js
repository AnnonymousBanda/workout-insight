const express = require('express')
const {
	exerciseByID,
	exerciseByBodyPart,
	bodyPart,
} = require('./../controllers/api.controller')
const { catchAsync } = require('./../controllers/error.controller')

const router = express.Router()

router.route('/').get(catchAsync(exerciseByID))
router.route('/:id').get(catchAsync(exerciseByBodyPart))

router.route('/bodyPartList').get(catchAsync(bodyPart))

module.exports = router
