const express = require('express')
const {
	exerciseByID,
	exerciseByBodyPart,
	bodyPart,
} = require('./../controllers/api.controller')
const { catchAsync } = require('./../controllers/error.controller')

const router = express.Router()

router.route('/').get(catchAsync(exerciseByID))

router.route('/bodyPartList').get(catchAsync(bodyPart))
router.route('/:id').get(catchAsync(exerciseByBodyPart))

module.exports = router
