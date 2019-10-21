const is = require('is_js')
const bcrypt = require('bcrypt')
const { Router } = require('express')
const { validate } = require('micro-validator').default

const userValidations = require('../validation/user')
const { userModel } = require('../models/user')

const userRouter = Router()

const saltRounds = 10

const generatePassword = (rawPassword = '') =>
  new Promise (
    (resolve, reject) => {
      bcrypt.hash(rawPassword, saltRounds, function(err, hash) {
        if (err) {
          reject(err)
        }
        resolve(hash)
      })
    }
  )

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

      throw new Error('User with this email id already exist')
    }

    const hashedPassword = await generatePassword(req.body.password)

    const User = new userModel({...req.body, password: hashedPassword})

    User
      .save()
      .then(() => {
        res.status(200).json({ message: 'User created successfully' })
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong. Unable to create user' })
      })

  } catch (error) {
    console.log(error)
  }
})

userRouter.delete('/:user_id/delete', async (req, res) => {
  const { user_id = '' } = req.params
  
  if (!user_id.trim()) {
    return res.status(400).json({ errors: ['You have to provide a user_id'] })
  }

  try {
    const record = await userModel.findById(user_id)

    if (!record) {
      return res.status(400).json({ errors: ['Please provide a valid user_id'] })
    } else {
      userModel.findByIdAndRemove(user_id)
        .then(() => res.status(200).json({ message: 'User deleted successfully' }))
        .catch(error => console.log(error))
    }

  } catch (error) {
    if (error.name == "CastError") {
      return res.status(400).json({ errors: ['Please provide a valid user_id'] })
    }
  }
})

module.exports = userRouter