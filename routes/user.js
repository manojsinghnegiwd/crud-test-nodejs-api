const is = require('is_js')
const { Router } = require('express')
const { validate } = require('micro-validator').default

const userValidations = require('../validation/user')
const { userModel } = require('../models/user')

const userRouter = Router()

userRouter.post('/', async (req, res) => {

  const validationErrors = validate(userValidations, req.body)

  if(!is.empty(validationErrors)) {
    return res.status(400).json({ errors: validationErrors })
  }

  // Find if user exist

  try {
    const record = await userModel.find({ email: req.body.email })

    // If exist
    if (record.length) {
      res.status(400).json({
        errors: {
          duplicate: ['User with this email id already exist']
        }
      })
    }

  } catch (error) {
    console.log(error)
  }

  // If not exist
    // Create a new user
  // Else
    // Return a duplicate user record error
  
  res.status(200).json({ message: 'success' })
})

module.exports = userRouter