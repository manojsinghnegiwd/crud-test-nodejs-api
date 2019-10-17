const { Schema, model } = require('mongoose')

const requiredStringDefObj = {
  required: true,
  type: String
}

const userSchema = new Schema({
  firstName: requiredStringDefObj,
  lastName: requiredStringDefObj,
  email: requiredStringDefObj,
  password: requiredStringDefObj,
  employeeNo: requiredStringDefObj,
  credits: { default: 0, type: Number },
  profilePicture: String
}, {
  timestamps: {
    createdAt: 'created_at'
  }
})

const userModel = new model('user', userSchema)

module.exports = {
  userModel,
  userSchema
}