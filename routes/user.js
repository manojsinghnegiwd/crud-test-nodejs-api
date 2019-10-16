const { Router } = require('express')
const microValidator = require('micro-validator').default
const is = require('is_js')
const { userModel } = require('../models/user')

const userRouter = Router()

const userValidations = {
  firstName: {
    required: {
      errorMsg: 'First Name is required'
    }
  },
  lastName: {
    required: {
      errorMsg: 'Last Name is required'
    }
  },
  email: {
    required: {
      errorMsg: 'Email is required'
    },
    email: {
      errorMsg: 'Email is invalid'
    }
  },
  password: {
    required: {
      errorMsg: 'Password is required'
    }
  },
  employeeNo: {
    required: {
      errorMsg: 'Employee Number is required'
    }
  }
}

const validate = (data) => {
  return microValidator.validate(userValidations, data)
}

userRouter.post('/', (req, res) => {

  const validationErrors = validate(req.body)

  if(!is.empty(validationErrors)) {
    return res.status(400).json({ errors: validationErrors })
  }

  // Find if user exist
  // If not exist
    // Create a new user
  // Else
    // Return a duplicate user record error
  
  res.status(400).json({ message: 'error' })
})

module.exports = userRouter