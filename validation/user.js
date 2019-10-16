module.exports = {
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