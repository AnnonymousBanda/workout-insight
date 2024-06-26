const express = require('express')
const { exercise, bodyPartList } = require('./../controllers/api.controller')
const catchAsync = require('./../controllers/error.controller')

const router = express.Router()

router.route('/exercise/:id').get(catchAsync(exercise))

router.route('/bodyPartList').get(catchAsync(bodyPartList))

module.exports = router
