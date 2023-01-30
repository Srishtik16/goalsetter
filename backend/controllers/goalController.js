const asyncHandler = require('express-async-handler')

// @desc Get Goals
// @route GET /api/goals
// access Private
const getGoals = asyncHandler(async (req, res) => {
      res.status(200).send({
            message: 'Get Goals'
      });
})

// @desc Set Goals
// @route POST /api/goals
// access Private
const setGoals = asyncHandler(async (req, res) => {
      // console.log(req.body);
      if(!req.body.text) {
            res.status(400)
            throw new Error('Please add a text field')
      }
      res.status(200).send({
            message: 'Set Goals'
      });
})

// @desc Update Goals
// @route PUT /api/goals/:id
// access Private
const updateGoal = asyncHandler(async (req, res) => {
      res.status(200).send({
            message: `Update Goal ${req.params.id}`
      });
})

// @desc Delete Goals
// @route GET /api/goals/:id
// access Private
const deleteGoal = asyncHandler(async (req, res) => {
      res.status(200).send({
            message: `Delete Goal ${req.params.id}`
      });
})

module.exports = {
      getGoals, setGoals, updateGoal, deleteGoal
}